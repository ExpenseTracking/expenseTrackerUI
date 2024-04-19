import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { ApiService } from '../../Shared/app.service';
import { messages, transactionType, user } from "../../Shared/models"
import { AddTransactionTypeDialogComponent } from './add-transaction-type-dialog/add-transaction-type-dialog.component';
import { EditTransactionTypeDialogComponent } from './edit-transaction-type-dialog/edit-transaction-type-dialog.component';
import { DeleteTransactionTypeDialogComponent } from './delete-transaction-type-dialog/delete-transaction-type-dialog.component';
import { AuthService } from '../../Shared/auth.service';

@Component({
  selector: 'app-transaction-type',
  templateUrl: './transaction-type.component.html',
  styleUrl: './transaction-type.component.css'
})
export class TransactionTypeComponent implements OnInit {
  displayColumns: string[] = ['transactionTypeId', 'userId', 'transactionTypeName'];
  transactionTypes: transactionType[] = [];
  user$: Observable<user | null>;
  user: user | null = null;

  constructor (
    private apiService: ApiService,
    private authService: AuthService,
    private transactionDialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // assign the observable
    this.user$ = this.authService.getUser();
    
    // subscribe to this observable
    this.user$.subscribe((userChanges: user | null) => {
      this.user = userChanges;
    });

    if(this.user) {
      this.apiService.getTransactionTypeById(this.user.userId).subscribe((data: transactionType[]) => {
        this.transactionTypes = data;
      });
    }
  }

  deleteTransaction(transactionTypeId: number) {
    const dialogRef = this.transactionDialog.open(DeleteTransactionTypeDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.apiService.deleteTransactionType(transactionTypeId)
        .subscribe(() => {
          this.apiService.getTransactionTypeById(this.user.userId)
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
          this.apiService.getTransactionTypeById(this.user.userId)
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
          this.apiService.getTransactionTypeById(this.user.userId)
          .subscribe(updatedTransactionTypes => {
            this.transactionTypes = updatedTransactionTypes;

            this.cdr.detectChanges();
          });
        });
      }
    });
  }
}
