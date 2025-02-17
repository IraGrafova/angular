import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { applicationConfigMock } from './shared/application-config/application-config.mock';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ProductsListComponent, SidenavComponent, MatListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly applicationConfig = applicationConfigMock;
  // readonly items = productsMock;

  readonly isSidenavOpenedStore = signal(false);

  readonly productCounterInBasket = signal(null);

  readonly productsInBasketStore = signal([]);

  onMenuClick() {
    this.isSidenavOpenedStore.update((value) => !value);
    // console.log(this.items);
  }

  // isProductInCart() {} {
  //   this.isProductInCartStore.update((value) => value +1)
  // }
}
