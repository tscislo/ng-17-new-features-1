import { Component } from '@angular/core';

@Component({
  selector: 'app-not-standalone-component',
  template: `
    <p>
      not-standalone-component works!
      <app-standalone></app-standalone>
    </p>
  `,
  styles: ``
})
export class NotStandaloneComponentComponent {

}
