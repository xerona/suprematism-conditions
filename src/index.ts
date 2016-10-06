import { CommonModule } from '@angular/common';
import { ConditionsComponent } from './conditions.component';
import { NgModule } from '@angular/core';

export * from './conditions.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        ConditionsComponent,
    ],
    exports: [
        ConditionsComponent,
    ],
    entryComponents: [
        ConditionsComponent,
    ]
})
export class ConditionsModule {

}
