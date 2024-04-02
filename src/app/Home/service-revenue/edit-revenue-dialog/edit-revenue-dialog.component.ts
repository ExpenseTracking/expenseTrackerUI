import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

import { ApiService } from '../../../Shared/app.service';
import { messages, transactionType, incomeSource, Income, Expense } from "../../../Shared/models";

// global const
let INCOME_ITEM: any;
let INCOME_SOURCE_NAME: any;
let INCOME_SOURCE_ID: any;
let INCOME_AMOUNT: any;
let INCOME_DATE: any;
let INCOME_DESCRIPTION: any;

let EXPENSE_ITEM: any;
let EXPENSE_TYPE_NAME: any;
let EXPENSE_TYPE_ID: any;
let EXPENSE_AMOUNT: any;
let EXPENSE_DATE: any;
let EXPENSE_DESCRIPTION: any;

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
            for (INCOME_ITEM of this.income) {
                if (INCOME_ITEM.incomeId == this.data.row) {
                    INCOME_SOURCE_ID = INCOME_ITEM.incomeSourceId;
                    INCOME_SOURCE_NAME = INCOME_ITEM.incomeSourceName;
                    INCOME_AMOUNT = INCOME_ITEM.amount;
                    INCOME_DATE = INCOME_ITEM.date;
                    INCOME_DESCRIPTION = INCOME_ITEM.description;
                }
            }
        })

        // expense data
        this.apiService.getExpenseByUserId(3).subscribe((data: Expense[]) => {
            this.expense = data;

            // data for source/type button dropdown
            for (EXPENSE_ITEM of this.expense) {
                if (EXPENSE_ITEM.expenseId == this.data.row) {
                    EXPENSE_TYPE_ID = EXPENSE_ITEM.transactionTypeId;
                    EXPENSE_TYPE_NAME = EXPENSE_ITEM.transactionTypeName;
                    EXPENSE_AMOUNT = EXPENSE_ITEM.amount;
                    EXPENSE_DATE = EXPENSE_ITEM.date;
                    EXPENSE_DESCRIPTION = EXPENSE_ITEM.description;
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
    incomeSourceButton = INCOME_SOURCE_NAME;
    incomeAmount = INCOME_AMOUNT;
    incomeDate = INCOME_DATE;
    incomeDescription = INCOME_DESCRIPTION;

    expenseTypeButton = EXPENSE_TYPE_NAME;
    expenseAmount = EXPENSE_AMOUNT;
    expenseDate = EXPENSE_DATE;
    expenseDescription = EXPENSE_DESCRIPTION;

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
        incomeSourceId: INCOME_SOURCE_ID,
        amount: INCOME_AMOUNT,
        date: INCOME_DATE,
        description: INCOME_DESCRIPTION,
        action: ''
    };

    

    // close dialog and send back 'create' to page
    onConfirmIncome(): void {
        console.log(this.incomeDetails);
        this.incomeDetails.action = 'updateIncome';
        this.dialogRef.close(this.incomeDetails);
    }

    // object to hold new expense details
    expenseDetails = {
        expenseId: this.data.row,
        userId: 3,
        transactionTypeId: EXPENSE_TYPE_ID,
        amount: EXPENSE_AMOUNT,
        date: EXPENSE_DATE,
        description: EXPENSE_DESCRIPTION,
        action: ''
    };

    // close dialog and send back 'create' to page
    onConfirmExpense(): void {
        this.expenseDetails.action = 'updateExpense';
        this.dialogRef.close(this.expenseDetails);
    }
}