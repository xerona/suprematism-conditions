import { Component } from '@angular/core';

declare var require: any;

@Component({
  selector: 'supre-root',
  template: require('./app.component.html')
})
export class AppComponent {

  color = 'red';
  number = 1;
  audienceNumber = 1234421;
  audiencePercent = .0423;

  log(arg) {
    console.log(arg);
  }

}