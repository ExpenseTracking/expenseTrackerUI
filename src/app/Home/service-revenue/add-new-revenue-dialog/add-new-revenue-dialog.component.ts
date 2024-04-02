import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

import { ApiService } from '../../../Shared/app.service';
import { messages, transactionType, incomeSource } from "../../../Shared/models"

@Component({
    selector: 'app-add-new-revenue-dialog',
    templateUrl: './add-new-revenue-dialog.component.html',
    styleUrl: './add-new-revenue-dialog.component.css'
})
export class AddNewRevenueDialogComponent {
    // data variable to hold incoming string argument
    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
        private apiService: ApiService,
        private dialogRef: MatDialogRef<AddNewRevenueDialogComponent>) { }

    // pull and hold data from API for dropdown list
    transactionTypes: transactionType[] = [];
    incomeSources: incomeSource[] = [];

    ngOnInit() {
        this.apiService.getTransactionType().subscribe((data: transactionType[]) => {
            this.transactionTypes = data;
        })

        this.apiService.getIncomeSource().subscribe((data: incomeSource[]) => {
            this.incomeSources = data;
        })
    }

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

    // object to hold new income details
    incomeDetails = {
        userId: 3,
        incomeSourceId: 0,
        amount: 0,
        date: 0,
        description: '',
        action: ''
    };

    // close dialog and send back 'create' to page
    onConfirmIncome(): void {
        this.incomeDetails.action = 'createIncome';
        this.dialogRef.close(this.incomeDetails);
    }

    // object to hold new expense details
    expenseDetails = {
        userId: 3,
        transactionTypeId: 0,
        amount: 0,
        date: 0,
        description: '',
        action: ''
    };

    // close dialog and send back 'create' to page
    onConfirmExpense(): void {
        this.expenseDetails.action = 'createExpense';
        this.dialogRef.close(this.expenseDetails);
    }
}
