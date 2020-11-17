import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
    title = new Date();
    @Input() item: any;
    @Input() index: number;
    @Input() indexSeleted: number;
    @Output() selected: EventEmitter<number> = new EventEmitter();
    constructor() {}

    ngOnInit(): void {}

    onClickSelected(): void {
        this.selected.emit(this.index);
    }

    onFunctionClick(event: any): void {
        console.log('onFunctionClick', event);
    }
    onFunctionFocus(event: any): void {
        console.log('onFunctionFocus', event);
    }
    onFunctionKeyup(event: any): void {
        console.log('onFunctionKeyup', event);
    }
    onFunctionKeypress(event: any): void {
        console.log('onFunctionKeypress', event);
    }
    onFunctionChange(event: any): void {
        console.log('onFunctionChange', event);
    }
}
