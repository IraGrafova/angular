import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly imgSrc =
    'https://avatars.mds.yandex.net/i?id=19847df007428c4ffe90cc91e1d5c71431c145e9-11042380-images-thumbs&n=13';
  onClick() {
    console.log('click');
  }

  onKeyDown(event: Event) {
    console.log(event);
  }
}
