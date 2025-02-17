import { Component, signal, TemplateRef, viewChild, ViewContainerRef } from '@angular/core';
import { CardComponent } from './card/card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { productsMock } from '../../shared/products/products.mock';
import { CommonModule } from '@angular/common';
import { Product } from '../../shared/products/product.interface';
@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CardComponent, MatGridListModule, CommonModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent {
  readonly products = signal<Product[] | null>(null);
  readonly productsInBasket = signal<string[]>([]);

  private readonly productViewPort = viewChild.required('productTemplate', { read: ViewContainerRef });
  private readonly productTemplate = viewChild.required('productTemplate', { read: TemplateRef });

  constructor() {
    setTimeout(() => {
      this.products.set(productsMock);
    }, 3000);

    // effect(() => {
    //   this.products()?.forEach((product) => {
    //     this.productViewPort().createEmbeddedView(this.productTemplate(), { $implicit: product });
    //   });
    // });
  }

  onAddCardInBaskedClick(productId: string) {
    // const currentBasket = this.productsInBasket();
    // this.productsInBasket.set([...this.productsInBasket(), productId]);

    this.productsInBasket.update((value) => [...value, productId]);
    console.log(this.productsInBasket());
  }
}
