import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { transactionType } from '../../../Shared/models';

@Component({
  selector: 'app-add-transaction-type-dialog',
  templateUrl: './add-transaction-type-dialog.component.html',
  styleUrl: './add-transaction-type-dialog.component.css'
})
export class AddTransactionTypeDialogComponent {
  transactionTypeName: string = '';
  userId: number = 0;
  userName: string = '';

  constructor(public dialogRef: MatDialogRef<AddTransactionTypeDialogComponent>) {}

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
