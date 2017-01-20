import { ISubscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/map';
export declare class ConditionsComponent {
    subscriptions: Array<ISubscription>;
    color: string;
    number: number;
    audienceNumber: number;
    audiencePercent: number;
    storeSource: Subject<any>;
    storeStream: Observable<any>;
}
