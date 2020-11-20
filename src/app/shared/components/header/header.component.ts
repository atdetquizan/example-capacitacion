import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    status = false;
    navegates = [
      {
        path: '/examples',
        title: 'Examples'
      },
      {
        path: '/project',
        title: 'Proyectos'
      },
      {
        path: '/cuentas',
        title: 'Cuentas'
      },
      {
        path: '/music',
        title: 'Musica'
      }
    ];
    constructor(private eventsService: EventsService) {}

    ngOnInit(): void {
      const user = sessionStorage.getItem('user');
      if (user) {
        this.status = !!user;
      }
    }

    onClickLogin(status): void {
        this.status = !status;
        if (status) {
          sessionStorage.removeItem('user');
        } else {
          sessionStorage.setItem('user', 'true');
        }
        this.eventsService.auth.emit(this.status);
    }
}
