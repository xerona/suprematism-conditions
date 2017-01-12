"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
require('rxjs/add/operator/startWith');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/filter');
require('rxjs/add/operator/share');
require('rxjs/add/operator/scan');
require('rxjs/add/operator/map');
var ConditionsComponent = (function () {
    function ConditionsComponent() {
        this.subscriptions = [];
        this.conjunctionUpdated = new core_1.EventEmitter();
        this.actionsUpdated = new core_1.EventEmitter();
        this.storeSource = new Subject_1.Subject();
    }
    ConditionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var startWithObj = {
            conjunction: false,
            actions: [],
        };
        this.store$ = this.storeSource
            .startWith(startWithObj)
            .scan(function (last, current) {
            if (last === void 0) { last = {}; }
            return Object.assign({}, last, current);
        })
            .distinctUntilChanged(function (x, y) { return JSON.stringify(x) === JSON.stringify(y); });
        (_a = this.subscriptions).push.apply(_a, [
            this.store$
                .map(function (obj) { return obj.conjunction; })
                .distinctUntilChanged()
                .subscribe(function (conjunction) { return _this.conjunctionUpdated.emit(conjunction); }),
            this.store$
                .map(function (obj) { return obj.actions; })
                .distinctUntilChanged(function (x, y) { return JSON.stringify(x) === JSON.stringify(y); })
                .subscribe(function (conjunction) { return _this.actionsUpdated.emit(conjunction); })
        ]);
        var _a;
    };
    ConditionsComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    ConditionsComponent.prototype.onConjunctionChange = function (conjunction) {
        this.storeSource.next({ conjunction: conjunction });
    };
    ConditionsComponent.prototype.onActionsGroupChange = function (actions) {
        this.storeSource.next({ actions: actions });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ConditionsComponent.prototype, "color", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ConditionsComponent.prototype, "number", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ConditionsComponent.prototype, "audienceNumber", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ConditionsComponent.prototype, "audiencePercent", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ConditionsComponent.prototype, "conjunctionUpdated", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ConditionsComponent.prototype, "actionsUpdated", void 0);
    ConditionsComponent = __decorate([
        core_1.Component({
            selector: 'supre-conditions',
            template: require('./conditions.component.html'),
            styles: [require('./conditions.component.css')]
        }), 
        __metadata('design:paramtypes', [])
    ], ConditionsComponent);
    return ConditionsComponent;
}());
exports.ConditionsComponent = ConditionsComponent;
//# sourceMappingURL=/Users/craigmartin/projects/suprematism-conditions/src/conditions.component.js.map