import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { transactionType } from '../../../Shared/models';

@Component({
    selector: 'app-add-transaction-type-dialog',
    templateUrl: './add-transaction-type-dialog.component.html',
    styleUrl: './add-transaction-type-dialog.component.css'
})
export class AddTransactionTypeDialogComponent {
    transactionTypeName: string = '';
    userId: number;
    userName: string = '';

    constructor(public dialogRef: MatDialogRef<AddTransactionTypeDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { this.userId = data.userId; }

    onAdd(): void {
        if (this.transactionTypeName.trim() !== '') {
            const newTransactionType: transactionType = {
                userId: this.userId,
                transactionTypeName: this.transactionTypeName.trim(),
                isDeleted: false,
                userName: this.userName
            };
            this.dialogRef.close(newTransactionType);
        }
    }

    onCancel(): void {
        this.dialogRef.close();
    }
}
