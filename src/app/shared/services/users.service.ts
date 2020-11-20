import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { filter, map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    constructor(private http: HttpClient) {}

    get(): Observable<User[]> {
        return this.http.get<User[]>(
            'https://run.mocky.io/v3/f3fdfd73-434c-4db3-b425-117dfe23d258'
        ).pipe(
          tap((res) => {
            console.log('tap', res);
          }),
          map((res) => {
            return res.filter(x => x.id > 40);
          })
        );
    }
}
