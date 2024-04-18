import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";

type Mode = 'edit' | 'view';

@Component({
    selector: 'app-switch',
    standalone: true,
    imports: [CommonModule],
    template: `
        <button (click)="itemForSwitch.mode = itemForSwitch.mode === 'edit' ? 'view' : 'edit'">Toggle</button>
        
        
        @switch (itemForSwitch.mode) {
            @case ('edit') {
                <p>
                    Edit mode
                </p>
            }
            @case ('view') {
                <p>
                    View mode
                </p>
            }
        }
        
        <ng-container [ngSwitch]="itemForSwitch.mode">
            <p *ngSwitchCase="'edit'">
                Edit mode
            </p>
            <p *ngSwitchCase="'view'">
                View mode
            </p>
        </ng-container>
        
    `,
    styles: ``
})
export class SwitchComponent {
    itemForSwitch: { mode: Mode } = {
        mode: 'view'
    }
}
