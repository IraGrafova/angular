import { Directive, TemplateRef, inject, ViewContainerRef, input, effect } from '@angular/core';

@Directive({
  selector: '[appMyNgIf]',
  standalone: true,
})
export class MyNgIfDirective<Value> {
  private readonly viewContainerRef = inject(ViewContainerRef);
  private readonly templateRef = inject(TemplateRef);

  readonly appMyNgIf = input<null | undefined | Value>();

  constructor() {
    effect(() => {
      const isValueDefined = Boolean(this.appMyNgIf());
      const isContainerHasView = Boolean(this.viewContainerRef.length);

      if (!isValueDefined) {
        this.viewContainerRef.clear();

        return;
      }
      if (isContainerHasView) {
        this.viewContainerRef.clear();
      }
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    });
  }
}
