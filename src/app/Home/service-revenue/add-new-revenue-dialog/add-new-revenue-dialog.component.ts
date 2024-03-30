import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-add-new-revenue-dialog',
    templateUrl: './add-new-revenue-dialog.component.html',
    styleUrl: './add-new-revenue-dialog.component.css'
})
export class AddNewRevenueDialogComponent {
    // data variable to hold incoming string argument
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

    // data for source/type button dropdown
    incomeSourceButton = 'Select income source';
    expenseTypeButton = 'Select expense type';

    // function to update value of income button string
    updateIncomeSourceButton(source: string): void {
        this.incomeSourceButton = source;
    }

    // function to update value of expense button string
    updateExpenseTypeButton(source: string): void {
        this.expenseTypeButton = source;
    }
}
