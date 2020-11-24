import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/shared/interfaces/login.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient) {}
    login(params: Login): Observable<any> {
        return this.http.post<any>(`${environment.api}/auth/login`, params);
    }
}
