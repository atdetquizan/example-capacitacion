import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.eventsService.auth.subscribe((res) => {
      console.log('FooterComponent', res);
    });
  }

}
