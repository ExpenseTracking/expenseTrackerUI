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

export class EditRevenueDialogComponent implements OnInit {
    // data variable to hold incoming string argument
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private apiService: ApiService,
        private dialogRef: MatDialogRef<EditRevenueDialogComponent>
    ) { }

    // pull and hold data from API for dropdown list
    income: Income[] = [];
    expense: Expense[] = [];
    transactionTypes: transactionType[] = [];
    incomeSources: incomeSource[] = [];

    // Variables to store income details
    incomeSourceName!: string;
    incomeSourceId!: number;
    incomeAmount!: number;
    incomeDate!: Date;
    incomeDescription!: string;

    // Variables to store expense details
    expenseTypeName!: string;
    expenseTypeId!: number;
    expenseAmount!: number;
    expenseDate!: Date;
    expenseDescription!: string;

    ngOnInit() {
        // income data
        this.apiService.getIncomeByUserId(3).subscribe((data: Income[]) => {
            this.income = data;

            // data for source/type button dropdown
            for (let incomeItem of this.income) {
                if (incomeItem.incomeId == this.data.row) {
                    this.incomeSourceId = incomeItem.incomeSourceId;
                    this.incomeSourceName = incomeItem.incomeSourceName;
                    this.incomeAmount = incomeItem.amount;
                    this.incomeDate = incomeItem.date;
                    this.incomeDescription = incomeItem.description;
                }
            }
        });

        // expense data
        this.apiService.getExpenseByUserId(3).subscribe((data: Expense[]) => {
            this.expense = data;

            // data for source/type button dropdown
            for (let expenseItem of this.expense) {
                if (expenseItem.expenseId == this.data.row) {
                    this.expenseTypeId = expenseItem.transactionTypeId;
                    this.expenseTypeName = expenseItem.transactionTypeName;
                    this.expenseAmount = expenseItem.amount;
                    this.expenseDate = expenseItem.date;
                    this.expenseDescription = expenseItem.description;
                }
            }
        });

        this.apiService.getTransactionType().subscribe((data: transactionType[]) => {
            this.transactionTypes = data;
        });

        this.apiService.getIncomeSource().subscribe((data: incomeSource[]) => {
            this.incomeSources = data;
        });
    }

    // function to update value of income button string
    updateIncomeSourceButton(source: string): void {
        this.incomeSourceName = source;
    }

    // function to update value of expense button string
    updateExpenseTypeButton(source: string): void {
        this.expenseTypeName = source;
    }

    // close dialog and send back 'create' to page
    onConfirmIncome(): void {
        const incomeDetails = {
            incomeId: this.data.row,
            userId: 3,
            incomeSourceId: this.incomeSourceId,
            amount: this.incomeAmount,
            date: this.incomeDate,
            description: this.incomeDescription,
            action: 'updateIncome'
        };
        this.dialogRef.close(incomeDetails);
    }

    // close dialog and send back 'create' to page
    onConfirmExpense(): void {
        const expenseDetails = {
            expenseId: this.data.row,
            userId: 3,
            transactionTypeId: this.expenseTypeId,
            amount: this.expenseAmount,
            date: this.expenseDate,
            description: this.expenseDescription,
            action: 'updateExpense'
        };
        this.dialogRef.close(expenseDetails);
    }
}