import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestPersons } from 'src/app/shared/interfaces/request-persons.interface';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PersonsService {
    constructor(private http: HttpClient) {}
    get(params: any): Observable<any> {
        params = Object.assign(params, { roleId: 9 });
        return this.http.get(`${environment.api}/persons/getPersonsByRolePaged`, { params });
    }
}
