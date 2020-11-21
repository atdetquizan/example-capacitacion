import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.scss']
})
export class ListPersonsComponent implements OnInit {
  @Input() persons: any[];
  constructor() { }

  ngOnInit(): void {
    console.log(this.persons);
  }

}
