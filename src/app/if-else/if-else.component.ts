import {Component} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-if-else',
  standalone: true,
  imports: [NgIf],
  template: `
      <p *ngIf="flag; else elseBlock">True block</p>
      <ng-template #elseBlock>
          <p>False block</p>
      </ng-template>

      @if (flag) {
          <p>True block</p>
      } @else {
          <p>False block</p>
      }

      <button (click)="flag = !flag">Toggle</button>

  `,
  styles: ``
})
export class IfElseComponent {
    flag = true;
}
