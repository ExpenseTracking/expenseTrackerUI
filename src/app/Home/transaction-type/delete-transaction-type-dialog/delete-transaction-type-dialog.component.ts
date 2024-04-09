import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-transaction-type-dialog',
  templateUrl: './delete-transaction-type-dialog.component.html',
  styleUrl: './delete-transaction-type-dialog.component.css'
})
export class DeleteTransactionTypeDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteTransactionTypeDialogComponent>
  ) {}

  onDelete(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}