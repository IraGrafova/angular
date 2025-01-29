import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-product',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatIconModule],
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
    longText = `Самая популярная комнатная орхидея. Для орхидей подходит яркий рассеянный свет, прямые солнечные лучи надо исключить. Расположить растение можно на западной или восточной стороне, затем не перемещайте орхидею. Подходящая температура содержания составляет 17-25 градусов. Для стимуляции цветения можно создать суточное колебание температур на 5-6 градусов. Поливают орхидеи каждые 10-14 дней, применяя способ погружения. Для этого корни цветка помещают в емкость с теплой водой на 15-20 минут, а затем вытаскивают. Несколько раз в неделю листья растения протирают влажной губкой. В качестве подкормки используют специальные удобрения для орхидей.`;
}
