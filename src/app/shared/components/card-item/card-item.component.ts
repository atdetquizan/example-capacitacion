import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../interfaces/project.interface';

@Component({
    selector: 'app-card-item',
    templateUrl: './card-item.component.html',
    styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {
    @Input() item: Project;
    @Output() detailModal: EventEmitter<Project> = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    onClickModal(value: Project): void {
        this.detailModal.emit(value);
    }
}
