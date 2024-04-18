import {Component, Input} from '@angular/core';
import {IHaveRequiredInputsComponent} from "../i-have-required-inputs/i-have-required-inputs.component";

@Component({
  selector: 'app-required-inputs',
  standalone: true,
  imports: [IHaveRequiredInputsComponent],
  template: `
    <p>
      <app-i-have-required-inputs requiredInput="Hello World" />
    </p>
  `,
  styles: ``
})
export class RequiredInputsComponent {
}
