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
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'ng-new-features';
}
