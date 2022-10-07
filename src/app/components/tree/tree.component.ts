import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { FileNode, FlatTreeNode } from '../../models';
import { FilePickerService } from '../../services';
import { files } from '../../mock';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeComponent {
  public treeControl: FlatTreeControl<FlatTreeNode>;
  public treeFlattener: MatTreeFlattener<FileNode, FlatTreeNode>;
  public dataSource: MatTreeFlatDataSource<FileNode, FlatTreeNode>;

  @Output() public selectedFile = new EventEmitter<string>();

  constructor(private filePickerService: FilePickerService) {
    this.treeFlattener = new MatTreeFlattener(
      this.transformer,
      this.getLevel,
      this.isExpandable,
      this.getChildren
    );

    this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(
      this.treeControl,
      this.treeFlattener
    );
    this.dataSource.data = this.filePickerService.getFilesStructure(files);
  }

  public selected(node: FileNode) {
    const value: string = node.type === 'file' ? node.name : '';
    this.selectedFile.emit(value);
  }

  public hasChild(index: number, node: FlatTreeNode): boolean {
    return node.expandable;
  }

  private transformer(node: FileNode, level: number): FlatTreeNode {
    return {
      name: node.name,
      type: node.type,
      level,
      expandable: !!node.children,
    };
  }

  private getLevel(node: FlatTreeNode): number {
    return node.level;
  }

  private isExpandable(node: FlatTreeNode): boolean {
    return node.expandable;
  }

  private getChildren(node: FileNode): FileNode[] | null | undefined {
    return node.children;
  }
}
