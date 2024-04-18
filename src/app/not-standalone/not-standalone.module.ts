import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotStandaloneComponentComponent} from "./not-standalone-component/not-standalone-component.component";
import {StandaloneComponent} from "../standalone/standalone/standalone.component";
import {NotStandaloneRoutingModule} from "./not-standalone-routing.module";


@NgModule({
    declarations: [
        NotStandaloneComponentComponent
    ],
    imports: [
        NotStandaloneRoutingModule,
        CommonModule,
        StandaloneComponent // standalone component imported as a module
    ]
})
export class NotStandaloneModule {
}
