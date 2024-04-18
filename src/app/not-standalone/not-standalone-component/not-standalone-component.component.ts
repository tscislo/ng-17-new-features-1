import { Component } from '@angular/core';

@Component({
  selector: 'app-not-standalone-component',
  template: `
    <p>
      not-standalone-component works!
      <app-standalone /> <!-- Self closing tags used to insert component -->
    </p>
  `,
  styles: ``
})
export class NotStandaloneComponentComponent {

}
