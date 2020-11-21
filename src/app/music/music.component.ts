import { Component, OnInit } from '@angular/core';
import { PersonsService } from './providers/persons.service';

@Component({
    selector: 'app-music',
    templateUrl: './music.component.html',
    styleUrls: ['./music.component.scss'],
})
export class MusicComponent implements OnInit {
    value = 0;
    persons: any;
    constructor(private personsService: PersonsService) {}

    ngOnInit(): void {
        this.personsService.get({ page: 1, take: 10, search: '' }).subscribe((res) => {
            this.persons = res;
            console.log(this.persons.items);
        });
    }

    async onClickDecrease(): Promise<void> {
        // tslint:disable-next-line: no-unused-expression
        new Promise((resolve) => {
            setTimeout(() => {
                this.value -= 1;
                resolve({
                    name: 'DECREASE',
                    value: this.value,
                });
            }, 1000);
        }).then((res: any) => {
          this.value = res.value;
      });
    }

    async onClickAdd(): Promise<void> {
        // tslint:disable-next-line: no-unused-expression
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    name: 'ADD',
                    value: this.value + 1,
                });
                // reject('Error');
            }, 1000);
        }).then((res: any) => {
            this.value = res.value;
        }).catch((res) => {
          console.log(res);
        });
    }
}
