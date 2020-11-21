import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { Token } from '../interfaces/token.interface';

@Injectable({
    providedIn: 'root',
})
export class ValidarUsuarioGuard implements CanActivate {
    constructor(private storageService: StorageService, private router: Router){}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        const user = this.storageService.get<Token>('user');
        if (user) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }
}
