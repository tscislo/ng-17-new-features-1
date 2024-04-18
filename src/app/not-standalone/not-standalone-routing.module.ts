import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {NotStandaloneComponentComponent} from "./not-standalone-component/not-standalone-component.component";

const routes: Routes = [{
  path: '**',
  component: NotStandaloneComponentComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotStandaloneRoutingModule {}
