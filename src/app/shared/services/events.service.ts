import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class EventsService {
    auth: EventEmitter<boolean> = new EventEmitter();
    clicks: BehaviorSubject<any> = new BehaviorSubject(0);
    subject: Subject<any> = new Subject();
    constructor() {}
}
