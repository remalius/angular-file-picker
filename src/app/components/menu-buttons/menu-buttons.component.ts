import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-buttons',
  templateUrl: './menu-buttons.component.html',
  styleUrls: ['./menu-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuButtonsComponent {
  @Input() public isDesktop: boolean = false;
}
