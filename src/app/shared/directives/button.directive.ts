import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appButton]',
})
export class ButtonDirective {
    constructor(private elementRef: ElementRef) {
      this.customizarBackground(this.elementRef.nativeElement);
    }
    customizarBackground(element: any): any {
      console.log(element);
      // element.style.color = 'green';
    }
}
