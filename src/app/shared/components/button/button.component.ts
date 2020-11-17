import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
    @Input() label = 'Card Selected';
    @Output() eventClick: EventEmitter<void> = new EventEmitter();
    constructor() {}

    ngOnInit(): void {}

    onClickSelected(): void {
        this.eventClick.emit();
    }
}
