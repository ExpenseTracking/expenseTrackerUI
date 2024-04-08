import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { ApiService } from '../../../Shared/app.service';
import { transactionType } from "../../../Shared/models"

@Component({
  selector: 'app-add-expense-dialog',
  templateUrl: './add-expense-dialog.component.html',
  styleUrl: './add-expense-dialog.component.css'
})
export class AddExpenseDialogComponent implements OnInit {
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
    updateExpenseTypeButton(source: string): void {
        this.expenseTypeButton = source;
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
