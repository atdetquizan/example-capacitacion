import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

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
            title: 'Examples',
        },
        {
            path: '/project',
            title: 'Proyectos',
        },
        {
            path: '/cuentas',
            title: 'Cuentas',
        },
        {
            path: '/music',
            title: 'Musica',
        },
    ];
    constructor(private eventsService: EventsService, private storageService: StorageService, private router: Router) {}

    ngOnInit(): void {
        this.eventsService.auth.subscribe((res: Token) => {
            if (res) {
                this.status = true;
            } else {
                this.status = false;
            }
        });
    }
    /**
     * Determines whether click login on
     * @param status boolean
     */
    onClickLogout(): void {
        this.status = false;
        this.storageService.removeAll();
        this.router.navigate(['/']);
    }
}
