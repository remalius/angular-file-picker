import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-browser-modal',
  templateUrl: './browser-modal.component.html',
  styleUrls: ['./browser-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrowserModalComponent {
  public file: string | null = null;

  setFile(name: string) {
    this.file = name ? name : null;
  }
}
