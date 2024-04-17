import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { transactionType } from '../../../Shared/models';

@Component({
  selector: 'app-edit-transaction-type-dialog',
  templateUrl: './edit-transaction-type-dialog.component.html',
  styleUrl: './edit-transaction-type-dialog.component.css'
})
export class EditTransactionTypeDialogComponent implements OnInit {
  transactionType!: transactionType;

  constructor(
    public dialogRef: MatDialogRef<EditTransactionTypeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: transactionType
  ) {}

  ngOnInit(): void {
    this.transactionType = this.data;
  }

  onSave(): void {
    this.dialogRef.close(this.transactionType);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
