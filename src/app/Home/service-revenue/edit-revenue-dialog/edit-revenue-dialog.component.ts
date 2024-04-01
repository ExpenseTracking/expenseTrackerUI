import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

import { ApiService } from '../../../Shared/app.service';
import { messages, transactionType, incomeSource, Income, Expense } from "../../../Shared/models";

@Component({
    selector: 'app-edit-revenue-dialog',
    templateUrl: './edit-revenue-dialog.component.html',
    styleUrl: './edit-revenue-dialog.component.css'
})
export class EditRevenueDialogComponent {
    // data variable to hold incoming string argument
    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
        private apiService: ApiService,
        private dialogRef: MatDialogRef<EditRevenueDialogComponent>) { }

    // pull and hold data from API for dropdown list
    income: Income[] = [];
    expense: Expense[] = [];
    transactionTypes: transactionType[] = [];
    incomeSources: incomeSource[] = [];

    ngOnInit() {
        // income data
        this.apiService.getIncomeByUserId(3).subscribe((data: Income[]) => {
            this.income = data;

            // data for source/type button dropdown
            for (const item of this.income) {
                if (item.incomeId == this.data.row) {
                    this.incomeSourceButton = item.incomeSourceName;
                    this.incomeAmount = item.amount;
                    this.incomeDate = item.date;
                }
            }
        })

        // expense data
        this.apiService.getExpenseByUserId(3).subscribe((data: Expense[]) => {
            this.expense = data;

            // data for source/type button dropdown
            for (const item of this.expense) {
                if (item.expenseId == this.data.row) {
                    this.expenseTypeButton = item.transactionTypeName;
                }
            }
        })

        this.apiService.getTransactionType().subscribe((data: transactionType[]) => {
            this.transactionTypes = data;
        })

        this.apiService.getIncomeSource().subscribe((data: incomeSource[]) => {
            this.incomeSources = data;
        })
    }

    // data for source/type button dropdown
    incomeSourceButton = '';
    incomeAmount = 6;
    incomeDate: Date = new Date(0, 0, 1);
    expenseTypeButton = '';

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
        incomeId: this.data.row,
        userId: 3,
        incomeSourceId: 0,
        amount: 0,
        date: 0,
        description: '',
        action: ''
    };

    // close dialog and send back 'create' to page
    onConfirmIncome(): void {
        this.incomeDetails.action = 'updateIncome';
        this.dialogRef.close(this.incomeDetails);
    }

    // object to hold new expense details
    expenseDetails = {
        expenseId: this.data.row,
        userId: 3,
        transactionTypeId: 0,
        amount: 0,
        date: 0,
        description: '',
        action: ''
    };

    // close dialog and send back 'create' to page
    onConfirmExpense(): void {
        this.expenseDetails.action = 'updateExpense';
        this.dialogRef.close(this.expenseDetails);
    }
}