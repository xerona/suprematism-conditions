import { EventEmitter, OnInit } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/map';
export declare class ConditionsComponent implements OnInit {
    subscriptions: Array<ISubscription>;
    color: string;
    number: number;
    audienceNumber: number;
    audiencePercent: number;
    conjunctionUpdated: EventEmitter<{}>;
    actionsUpdated: EventEmitter<{}>;
    storeSource: Subject<any>;
    store$: Observable<any>;
    ngOnInit(): void;
    ngOnDestroy(): void;
    onConjunctionChange(conjunction: any): void;
    onActionsGroupChange(actions: any): void;
}
