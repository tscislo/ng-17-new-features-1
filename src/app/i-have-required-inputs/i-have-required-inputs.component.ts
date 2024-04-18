import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-i-have-required-inputs',
  standalone: true,
  imports: [],
  template: `
    <p>
      My Required input value: {{requiredInput}}
    </p>
    <p>
      My Optional input value: {{optionalInput ?? 'Not provided'}}
    </p>
  `,
  styles: ``
})
export class IHaveRequiredInputsComponent {
  @Input({required: true}) requiredInput: string;
  @Input() optionalInput?: string;
}
