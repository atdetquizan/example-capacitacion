import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    ViewChild,
    ElementRef,
    AfterViewInit,
    ViewChildren,
    QueryList,
} from '@angular/core';
import { Ascenda } from '../app.component';
import { CardComponent } from '../card/card.component';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit, AfterViewInit {
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
