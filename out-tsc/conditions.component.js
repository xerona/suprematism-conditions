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
var Observable_1 = require('rxjs/Observable');
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
    }
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
        core_1.Input(), 
        __metadata('design:type', Subject_1.Subject)
    ], ConditionsComponent.prototype, "storeSource", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Observable_1.Observable)
    ], ConditionsComponent.prototype, "storeStream", void 0);
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