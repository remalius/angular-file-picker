import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FilePickerService } from '../../services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryComponent {
  public filesHistory$: Observable<(string | null)[]>;
  public isLoading$: Observable<boolean>;

  constructor(private filePickerService: FilePickerService) {
    this.filesHistory$ = this.filePickerService.filesHistory$;
    this.isLoading$ = this.filePickerService.isLoading$;
  }

  public clearHistory(): void {
    this.filePickerService.clearHistory();
  }
}
