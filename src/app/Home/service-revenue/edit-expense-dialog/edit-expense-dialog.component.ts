import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    expense!: Expense;
    transactionTypes: transactionType[] = [];

    ngOnInit() {
        // store incoming expense info
        this.expense = this.data;

        this.apiService.getTransactionType().subscribe((data: transactionType[]) => {
            this.transactionTypes = data;
        });
    }

    // function to update value of expense button string
    updateExpenseTypeButton(typeName: string, typeId?: number): void {
        this.expense.transactionTypeName = typeName;
        this.expense.transactionTypeId = typeId !== undefined ? typeId : 0;
    }

    // close dialog and send new data back
    onConfirm(): void {
        this.dialogRef.close(this.expense);
    }

    // if user cancels edit operation
    onCancel(): void{
        this.dialogRef.close();
    }
}
