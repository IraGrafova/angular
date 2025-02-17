import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Product } from '../../../shared/products/product.interface';
import { CarouselDirective } from '../../../shared/carousel/carousel.directive';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, CarouselDirective],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  longText = `Самая популярная комнатная орхидея. Для орхидей подходит яркий рассеянный свет, прямые солнечные лучи надо исключить. Расположить растение можно на западной или восточной стороне.`;

  readonly product = input.required<Product>();
  readonly addCardInBasket = output<Product['_id'] | undefined>();

  buyProduct() {
    console.log('Buy product');
    console.log(this.product());
    this.addCardInBasket.emit(this.product()?._id);
  }
}
