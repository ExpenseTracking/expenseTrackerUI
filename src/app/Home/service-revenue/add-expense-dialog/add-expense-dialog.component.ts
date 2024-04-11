import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { ApiService } from '../../../Shared/app.service';
import { Expense, transactionType } from "../../../Shared/models"

@Component({
    selector: 'app-add-expense-dialog',
    templateUrl: './add-expense-dialog.component.html',
    styleUrl: './add-expense-dialog.component.css'
})
export class AddExpenseDialogComponent implements OnInit {
    // temp variables for new expense details
    userId: number = 3;
    transactionTypeId: number = 0;
    amount: number = 0;
    date!: Date;
    description: string = '';

    constructor(private apiService: ApiService,
        private dialogRef: MatDialogRef<AddExpenseDialogComponent>) { }

    // pull and hold data from API for dropdown list
    transactionTypes: transactionType[] = [];

    ngOnInit() {
        // get transaction types from API and store them
        this.apiService.getTransactionType().subscribe((data: transactionType[]) => {
            this.transactionTypes = data;
        })
    }

    // data for type button dropdown
    expenseTypeButton = 'Select expense type';

    // function to update value of expense button string
    updateExpenseTypeButton(typeName: string, typeId?: number): void {
        this.expenseTypeButton = typeName;
        this.transactionTypeId = typeId !== undefined ? typeId : 0;
    }

    // close dialog and send new expense back if user data is valid
    onConfirm(): void {
        if (this.transactionTypeId != 0 &&
            this.amount != 0 &&
            this.description.trim() !== '' &&
            this.date) {

            const newExpense: Expense = {
                userId: this.userId,
                transactionTypeId: this.transactionTypeId,
                amount: this.amount,
                date: this.date,
                description: this.description,
                CreatedAt: new Date,
                updatedAt: new Date,
                deletedAt: new Date,
                isDeleted: false,
                transactionTypeName: '',
                userName: ''
            };

            this.dialogRef.close(newExpense);
        }
    }

    // if user cancels add operation
    onCancel(): void {
        this.dialogRef.close();
    }
}
