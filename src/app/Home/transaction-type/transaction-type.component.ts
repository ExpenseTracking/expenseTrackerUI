import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { ApiService } from '../../Shared/app.service';
import { messages, transactionType } from "../../Shared/models"
import { AddTransactionTypeDialogComponent } from './add-transaction-type-dialog/add-transaction-type-dialog.component';
import { EditTransactionTypeDialogComponent } from './edit-transaction-type-dialog/edit-transaction-type-dialog.component';
import { DeleteTransactionTypeDialogComponent } from './delete-transaction-type-dialog/delete-transaction-type-dialog.component';

@Component({
  selector: 'app-transaction-type',
  templateUrl: './transaction-type.component.html',
  styleUrl: './transaction-type.component.css'
})
export class TransactionTypeComponent implements OnInit {
  displayColumns: string[] = ['transactionTypeId', 'userId', 'transactionTypeName'];
  transactionTypes: transactionType[] = [];
  userid: number = 0;

  constructor (
    private apiService: ApiService, 
    private transactionDialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.apiService.getTransactionTypeByUserId(this.userid).subscribe((data: transactionType[]) => {
      this.transactionTypes = data;
    })
  }

  deleteTransaction(transactionTypeId: number) {
    const dialogRef = this.transactionDialog.open(DeleteTransactionTypeDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.apiService.deleteTransactionType(transactionTypeId)
        .subscribe(() => {
          this.apiService.getTransactionTypeByUserId(this.userid)
          .subscribe(updatedTransactionTypes => {
            this.transactionTypes = updatedTransactionTypes;

            this.cdr.detectChanges();
          });
        });
      }
    });
  }

  addTransaction() {
    const dialogRef = this.transactionDialog.open(AddTransactionTypeDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.apiService.addTransactionType(result)
        .subscribe(() => {
          this.apiService.getTransactionTypeByUserId(this.userid)
          .subscribe(updatedTransactionTypes => {
            this.transactionTypes = updatedTransactionTypes;

            this.cdr.detectChanges();
          });
        });
      }
    });
  }

  editTransaction(transactionType: transactionType) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = transactionType;

    const dialogRef = this.transactionDialog.open(EditTransactionTypeDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.apiService.updateTransactionType(result)
        .subscribe(() => {
          this.apiService.getTransactionTypeByUserId(this.userid)
          .subscribe(updatedTransactionTypes => {
            this.transactionTypes = updatedTransactionTypes;

            this.cdr.detectChanges();
          });
        });
      }
    });
  }
}
