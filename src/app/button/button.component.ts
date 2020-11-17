import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
    @Output() eventClick: EventEmitter<void> = new EventEmitter();
    constructor() {}

    ngOnInit(): void {}

    onClickSelected(): void {
        this.eventClick.emit();
    }
}
