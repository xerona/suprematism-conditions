import { Component, EventEmitter, Input, AfterViewInit, OnDestroy, OnInit, Output } from '@angular/core';
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
export class ConditionsComponent implements OnInit {

  subscriptions: Array<ISubscription> = [];

  @Input() color: string;
  @Input() number: number;
  @Input() audienceNumber: number;
  @Input() audiencePercent: number;

  @Output() conjunctionUpdated = new EventEmitter();
  @Output() actionsUpdated = new EventEmitter();

  storeSource: Subject<any> = new Subject();
  store$: Observable<any>;

  ngOnInit() {
    const startWithObj = {
      conjunction: false,
      actions: [],
    };
    this.store$ = this.storeSource
      .startWith(startWithObj)
      .scan((last = {}, current) => Object.assign({}, last, current))
      .distinctUntilChanged((x, y) => JSON.stringify(x) === JSON.stringify(y));

    this.subscriptions.push(...[
      this.store$
        .map(obj => obj.conjunction)
        .distinctUntilChanged()
        .subscribe(conjunction => this.conjunctionUpdated.emit(conjunction)),
      this.store$
        .map(obj => obj.actions)
        .distinctUntilChanged((x, y) => JSON.stringify(x) === JSON.stringify(y))
        .subscribe(conjunction => this.actionsUpdated.emit(conjunction))
    ]);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  onConjunctionChange(conjunction) {
    this.storeSource.next({conjunction});
  }

  onActionsGroupChange(actions) {
    this.storeSource.next({actions});
  }

}
