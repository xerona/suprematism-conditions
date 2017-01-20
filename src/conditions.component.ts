import { Component, Input } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/map';

@Component({
  selector: 'supre-conditions',
  template: require('./conditions.component.html'),
  styles: [require('./conditions.component.css')]
})
export class ConditionsComponent {

  subscriptions: Array<ISubscription> = [];

  @Input() color: string;
  @Input() number: number;
  @Input() audienceNumber: number;
  @Input() audiencePercent: number;
  @Input() storeSource: Subject<any>;
  @Input() storeStream: Observable<any>;

}
