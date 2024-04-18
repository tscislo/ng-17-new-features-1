import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-for-loop',
    standalone: true,
    imports: [
        NgForOf
    ],
    template: `
        <button (click)="seedItems()">Seed</button>
        <ul>
            @for (item of items; track item.name) {
                <li>{{ item.name }}</li>
            } @empty {
                <p>No items!</p>
            }

            <li *ngFor="let item of items; trackBy: trackBy">{{ item.name }}</li>

        </ul>
    `,
    styles: ``
})
export class ForLoopComponent {
    items: {name: string; value: number}[] = [];

    trackBy = (idx: any, item: {name: string; value: number}) => item.name;

    seedItems() {
        this.items =  [
            {
                name: 'item1',
                value: 1
            },
            {
                name: 'item2',
                value: 2
            },
            {
                name: 'item3',
                value: 3
            }
        ]
    }
}
