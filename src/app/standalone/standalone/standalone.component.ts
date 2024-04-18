import {Component, inject, OnInit} from '@angular/core';
import {AuthService} from "../../auth.service";
import {ColDef} from "ag-grid-community";
import {AgGridAngular} from "ag-grid-angular";

@Component({
    selector: 'app-standalone',
    standalone: true,
    providers: [AuthService], // this is correct
    imports: [AgGridAngular],
    template: `
        <p>
            standalone works!
        </p>
        <ag-grid-angular
                class="ag-theme-quartz"
                style="width: 500px; height: 200px;"
                [rowData]="rowData"
                [columnDefs]="colDefs">
        </ag-grid-angular>
    `
})
export class StandaloneComponent implements OnInit {

    // Row Data: The data to be displayed.
    rowData = [
        {make: "Tesla", model: "Model Y", price: 64950, electric: true},
        {make: "Ford", model: "F-Series", price: 33850, electric: false},
        {make: "Toyota", model: "Corolla", price: 29600, electric: false},
    ];

    // Column Definitions: Defines the columns to be displayed.
    colDefs: ColDef[] = [
        {field: "make"},
        {field: "model"},
        {field: "price"},
        {field: "electric"}
    ];

    private authService: AuthService = inject(AuthService);

    ngOnInit() {
        console.log(this.authService.isAuthorized);
    }
}
