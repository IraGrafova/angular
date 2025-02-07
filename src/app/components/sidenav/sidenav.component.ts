import { ChangeDetectionStrategy, Component, viewChild, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';

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

  // readonly isSidenavOpened = model(false);

  private readonly matDrawer = viewChild.required<MatDrawer>('drawer');

  readonly navigationTemplate = input<TemplateRef<unknown>>();
  readonly contentTemplate = input<TemplateRef<unknown>>();

  private readonly navigationViewport = viewChild.required('navigationViewport', {
    read: ViewContainerRef,
  });

  private readonly contentViewport = viewChild.required('contentViewport', {
    read: ViewContainerRef,
  });

  constructor() {
    setTimeout(() => {
      const navigationTemplate = this.navigationTemplate();
      if (navigationTemplate) {
        this.navigationViewport().createEmbeddedView(navigationTemplate, {});
      }

      const contentTemplate = this.contentTemplate();
      if (contentTemplate) {
        this.contentViewport().createEmbeddedView(contentTemplate);
      }
    }, 1000);
  }

  toggleSidenavOpened() {
    // this.isSidenavOpenedChange.emit(!this.isSidenavOpened());
    // this.isSidenavOpened.set(!this.isSidenavOpened());
    this.matDrawer().toggle();
  }
}
