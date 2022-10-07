import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BrowserModalComponent } from '../';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FilePickerService } from '../../services';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class UploadComponent {
  public isLoading$: Observable<boolean>;
  public isUploaded$: Observable<boolean>;
  public fileControl = new FormControl('', Validators.required);

  constructor(
    public dialog: MatDialog,
    public filePickerService: FilePickerService
  ) {
    this.isLoading$ = this.filePickerService.isLoading$;
    this.isUploaded$ = this.filePickerService.isUploaded$;
  }

  public openModal() {
    this.filePickerService.breakUpload();
    const dialogRef: MatDialogRef<BrowserModalComponent, any> =
      this.dialog.open(BrowserModalComponent, {
        minHeight: '600px',
        minWidth: '600px',
      });

    dialogRef.afterClosed().subscribe((value: string) => {
      this.fileControl.setValue(value);
    });
  }

  public uploadFile(file: string | null): void {
    this.filePickerService.uploadFile(file);
    this.fileControl.setValue(null);
  }
}
