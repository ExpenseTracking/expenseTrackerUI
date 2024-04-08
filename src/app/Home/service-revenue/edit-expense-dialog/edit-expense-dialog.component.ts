import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

import { ApiService } from '../../../Shared/app.service';
import { transactionType, Expense } from "../../../Shared/models";

@Component({
  selector: 'app-edit-expense-dialog',
  templateUrl: './edit-expense-dialog.component.html',
  styleUrl: './edit-expense-dialog.component.css'
})
export class EditExpenseDialogComponent implements OnInit{
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private apiService: ApiService,
        private dialogRef: MatDialogRef<EditExpenseDialogComponent>
    ) { }

    // pull and hold data from API for dropdown list
    expense: Expense[] = [];
    transactionTypes: transactionType[] = [];

    // Variables to store expense details
    expenseTypeName!: string;
    expenseTypeId!: number;
    expenseAmount!: number;
    expenseDate!: Date;
    expenseDescription!: string;

    ngOnInit() {

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
    }

    // function to update value of expense button string
    updateExpenseTypeButton(source: string): void {
        this.expenseTypeName = source;
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
