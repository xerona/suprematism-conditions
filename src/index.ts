import { CommonModule } from '@angular/common';
import { ConditionsComponent } from './conditions.component';
import { NgModule } from '@angular/core';
import { ToggleModule } from 'suprematism-toggle';

export * from './conditions.component';

@NgModule({
    imports: [
        CommonModule,
        ToggleModule
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
