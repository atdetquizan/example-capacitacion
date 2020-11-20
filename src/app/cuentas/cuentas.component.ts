import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, Unsubscribable, Subscription } from 'rxjs';
import { tap, map, delay } from 'rxjs/operators';
import { EventsService } from '../shared/services/events.service';
import { UsersService } from '../shared/services/users.service';
import { User } from '../shared/interfaces/user.interface';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.scss']
})
export class CuentasComponent implements OnInit, OnDestroy {
  value: Observable<number> = of(1);
  subcribe: Subscription;
  users$: Observable<User[]>;
  users: User[];
  constructor(private eventsService: EventsService, private usersService: UsersService) { }

  ngOnDestroy(): void {
    this.subcribe.unsubscribe();
  }

  ngOnInit(): void {
    this.subcribe = this.value.subscribe((res) => {
      console.warn(res);
    });
    this.eventsService.auth.subscribe((res) => {
      console.log('CuentasComponent', res);
    });
    this.eventsService.clicks.subscribe((res) => {
      console.log('CuentasComponent - clicks', res);
    });
    this.users$ = this.usersService.get();
    this.usersService.get().subscribe((res: User[]) => {
      this.users = res;
    });
  }

  onClickDecrease(): void {
    const val = this.value;
    this.value = val.pipe(
      tap((res) => {
        sessionStorage.setItem('value', res.toString());
      }),
      map((res) => {
        console.warn('map', res);
        res -= 1;
        return res;
      })
    );
  }

  onClickAdd(): void {
    const val = this.value;
    this.value = val.pipe(
      tap((res) => {
        sessionStorage.setItem('value', res.toString());
      }),
      map((res) => {
        console.warn('map', res);
        res += 1;
        return res;
      })
    );
  }
}
