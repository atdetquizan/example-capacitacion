import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Ascenda } from '../shared/interfaces/ascenda.interface';
import { ContainerComponent } from './container/container.component';

@Component({
    selector: 'app-example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.scss'],
})
export class ExampleComponent implements AfterViewInit {
    @ViewChild(ContainerComponent) body: ContainerComponent;

    params: Ascenda = {
        title: 'Ascenda title',
        description: 'Ascenda description',
    };

    seletedIndex: number;

    ngAfterViewInit(): void {
        console.log(this.body.multiplicar(2));
    }

    onSelectedCard(index: number): void {
        this.seletedIndex = index;
    }
}
