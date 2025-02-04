import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
  // readonly isSidenavOpened = input(false);
  // readonly isSidenavopenedChange = output<boolean>();

  readonly isSidenavOpened = model(false);

  toggleSidenavOpened() {
    // this.isSidenavOpenedChange.emit(!this.isSidenavOpened());

    this.isSidenavOpened.set(!this.isSidenavOpened());
  }
}
