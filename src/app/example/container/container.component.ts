import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ascenda } from 'src/app/shared/interfaces/ascenda.interface';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit, AfterViewInit {
    @Input() ascenda: Ascenda;

    @Output() selected: EventEmitter<number> = new EventEmitter();

    index: number;

    @ViewChild('title') title: ElementRef;

    listado: Observable<any[]>;

    // @ViewChildren(CardComponent) query: QueryList<CardComponent>;

    constructor() {
        this.listado = of([
            {
                title: 'Card 1',
                type: 'A',
                sueldo: 100,
                valor: 2,
                operador: 'suma',
            },
            {
                title: 'Card 2',
                type: 'B',
                sueldo: 100,
                valor: 3,
                operador: 'resta',
            },
            {
                title: 'Card 3',
                type: 'A',
                sueldo: 100,
                valor: 4,
                operador: 'multiplca',
            },
            {
                title: 'Card 4',
                type: 'B',
                sueldo: 100,
                valor: 5,
                operador: 'suma',
            },
        ]);
    }

    ngAfterViewInit(): void {
        console.log('title', this.title);
        this.title.nativeElement.innerHTML = 'Example';
        // console.log('query', this.query);
        // setTimeout(() => {
        //   this.query.forEach((item) => {
        //     console.log(item);
        //     item.title = 'atdetquizan';
        //   });
        // }, 3000);
    }

    ngOnInit(): void {}

    onClickSelected(index: number): void {
        this.index = index;
        this.selected.emit(index);
    }

    multiplicar(index: number): number {
        return index;
    }
}
