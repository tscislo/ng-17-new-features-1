import {Component, Input, numberAttribute, OnChanges, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-routable-input-parameters',
    standalone: true,
    imports: [],
    template: `
    <p>
      ID: {{id}}
    </p>
  `,
    styles: ``
})
export class RoutableInputParametersComponent implements OnChanges {
    // booleanAttribute and numberAttribute are custom decorators to transform input values
    @Input({transform: numberAttribute}) id: number;

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes['id']);
        console.log(typeof changes['id'].currentValue);
    }
}
