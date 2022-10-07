import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  filter,
  interval,
  Observable,
  take,
  takeWhile,
  withLatestFrom,
} from 'rxjs';
import { FileNode } from '../models';

@Injectable()
export class FilePickerService {
  public filesHistory$: Observable<string[]>;
  public isLoading$: Observable<boolean>;
  public isUploaded$: Observable<boolean>;

  private filesHistorySubject$: BehaviorSubject<string[]>;
  private isLoadingSubject$: BehaviorSubject<boolean>;
  private isUploadedSubject$ = new BehaviorSubject<boolean>(false);

  constructor() {
    this.filesHistorySubject$ = new BehaviorSubject<string[]>([]);
    this.isLoadingSubject$ = new BehaviorSubject<boolean>(false);
    this.isUploadedSubject$ = new BehaviorSubject<boolean>(false);
    this.filesHistory$ = this.filesHistorySubject$.asObservable();
    this.isLoading$ = this.isLoadingSubject$.asObservable();
    this.isUploaded$ = this.isUploadedSubject$.asObservable();
  }

  public uploadFile(file: string | null): void {
    if (file) {
      this.isLoadingSubject$.next(true);
      interval(1000)
        .pipe(
          take(5),
          withLatestFrom(this.isLoading$),
          takeWhile(
            ([counter, isLoading]: [number, boolean]) =>
              counter <= 5 && isLoading
          ),
          filter(([counter]: [number, boolean]) => counter === 4)
        )
        .subscribe(() => {
          this.addFile(file);
          this.isLoadingSubject$.next(false);
          this.isUploadedSubject$.next(true);
        });
    }
  }

  public breakUpload(): void {
    this.isLoadingSubject$.next(false);
    this.isUploadedSubject$.next(false);
  }

  public clearHistory(): void {
    this.filesHistorySubject$.next([]);
  }

  public getFilesStructure(files: string[]): FileNode[] {
    return files.reduce(
      (arr: FileNode[], path: string) => this.addPath(path.split('/'), arr),
      []
    );
  }

  private addFile(fileName: string): void {
    this.filesHistorySubject$.next([
      ...this.filesHistorySubject$.value,
      fileName,
    ]);
  }

  private addPath(pathComponents: string[], arr: FileNode[]) {
    let name: string = pathComponents.shift() || '';
    let comp: FileNode | undefined = arr.find(
      (item: FileNode | undefined) => item && item.name === name
    );
    if (!comp && name != '') {
      comp = {
        name,
        type:
          pathComponents[pathComponents.length - 1]?.includes('.') ||
          pathComponents[pathComponents.length - 1] === ''
            ? 'folder'
            : 'file',
      };
      arr.push(comp);
    }
    if (comp && pathComponents.length) {
      this.addPath(pathComponents, comp.children || (comp.children = []));
    }
    return arr;
  }
}
