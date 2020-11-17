import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appFormulario]',
})
export class FormularioDirective {
    constructor(private elementRef: ElementRef) {
        //
    }

    @HostListener('keypress', ['$event']) onKeypress() {

    }

    @HostListener('keyup', ['$event']) onMouseOver(event: any): void {
      event.target.value = (event.target.value).replace(/[^0-9,]/g, '');
    }
}
