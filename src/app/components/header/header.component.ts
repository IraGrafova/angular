import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ApplicationConfig } from '../../shared/application-config/application-config.interface';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly config = input<ApplicationConfig>();

  readonly imgSrc =
    'https://avatars.mds.yandex.net/i?id=19847df007428c4ffe90cc91e1d5c71431c145e9-11042380-images-thumbs&n=13';

  readonly menuClick = output<Event>();

  readonly buyClick = output<Event>();
}
