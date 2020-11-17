import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { BodyComponent } from './body/body.component';
export interface Ascenda {
    title: string;
    description: string;
}
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {

    @ViewChild(BodyComponent) body: BodyComponent;

    params: Ascenda = {
        title: 'Ascenda title',
        description: 'Ascenda description'
    };

    seletedIndex: number;

    ngAfterViewInit(): void {
        console.log(this.body.multiplicar(2));
    }

    onSelectedCard(index: number): void {
        this.seletedIndex = index;
    }
}
