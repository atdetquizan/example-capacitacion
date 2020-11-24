import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth-providers/auth.service';
import { StorageService } from '../shared/services/storage.service';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Router } from '@angular/router';
import { EventsService } from '../shared/services/events.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private storageService: StorageService,
        private router: Router,
        private eventService: EventsService
    ) {
        this.initialForm();
    }

    ngOnInit(): void {
        console.log(this.form.value);
    }

    onSubmitLogin(): void {
        this.authService.login(this.form.value).subscribe(
            (res) => {
                this.storageService.set<Token>('user', res.token);
                this.router.navigate(['examples']);
                this.form.reset();
                this.eventService.auth.emit(res.token);
            },
            () => this.form.reset()
        );
    }

    private initialForm(): void {
        this.form = this.fb.group({
            username: [null, [Validators.required]],
            password: [null, [Validators.required]],
        });
    }
}
