import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <ul>
      <li><a routerLink="for-loop">&#64;sytax For Loop</a></li>
      <li><a routerLink="if-else">&#64;sytax If Else</a></li>
      <li><a routerLink="switch">&#64;sytax Switch</a></li>
    </ul>
    <ul>
      <li><a routerLink="not-auth">New Guard Functions</a></li>
    </ul>
    <ul>
      <li><a routerLink="standalone">Standalone</a></li>
      <li><a routerLink="not-standalone">Not Standalone</a></li>
    </ul>
    <ul>
      <li><a routerLink="take-until-destroyed">takeUntilDestroyed</a></li>
    </ul>
    <ul>
      <li><a routerLink="required-inputs">Required Inputs</a></li>
      <li><a routerLink="routable-input-parameters/1">Routable Input parameters id = 1</a></li>
      <li><a routerLink="routable-input-parameters/2">Routable Input parameters id = 2</a></li>
      <li><a routerLink="routable-input-parameters/3">Routable Input parameters id = 3</a></li>
    </ul>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'ng-new-features';
}
