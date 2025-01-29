import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [HeaderComponent, ProductComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'angular';
}
