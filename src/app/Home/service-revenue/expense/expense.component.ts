import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { DeleteRevenueDialogComponent } from '../delete-revenue-dialog/delete-revenue-dialog.component';
import { AddExpenseDialogComponent } from '../add-expense-dialog/add-expense-dialog.component';
import { Expense } from '../../../Shared/models';
import { ApiService } from '../../../Shared/app.service';
import { EditExpenseDialogComponent } from '../edit-expense-dialog/edit-expense-dialog.component';
import { user } from '../../../Shared/models';
import { AuthService } from '../../../Shared/auth.service';

@Component({
    selector: 'app-expense',
    templateUrl: './expense.component.html',
    styleUrl: './expense.component.css'
})
export class ExpenseComponent implements OnInit {
    // columns for data tables
    expenseColumns: string[] = ['type', 'amount', 'date', 'description', 'buttons'];

    // data variable to hold info
    expense: Expense[] = [];
    user: user;

    // injecting components/services via constructor
    constructor(private apiService: ApiService,
        private revenueDialog: MatDialog,
        private cdr: ChangeDetectorRef,
        private authService: AuthService) {
        this.user = authService.getUser();
    }

    ngOnInit() {
        // expense data
        this.apiService.getExpenseByUserId(this.user.userId).subscribe((data: Expense[]) => {
            this.expense = data;
        })
    }

    // method to delete row of data when user clicks delete
    deleteExpense(expenseId: any) {
        // open dialog window
        const dialogRef = this.revenueDialog.open(DeleteRevenueDialogComponent);

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.apiService.deleteExpense(expenseId).subscribe(() => {
                    this.apiService.getExpenseByUserId(this.user.userId).subscribe(updatedExpense => {
                        this.expense = updatedExpense;
                        this.cdr.detectChanges();
                    });
                });
            }
        });
    }

    // method to open dialog for adding new expense
    addExpense(userId : number) {
        const dialogRef = this.revenueDialog.open(AddExpenseDialogComponent, {
            data: { userId }
        });

        // get data back
        dialogRef.afterClosed().subscribe(result => {
            // add new expense to list
            if (result) {
                this.apiService.addExpense(result).subscribe(() => {
                    this.apiService.getExpenseByUserId(this.user.userId).subscribe(updateExpense => {
                        this.expense = updateExpense;
                        this.cdr.detectChanges();
                    });
                });
            }
        });
    }

    // method to update expense
    editExpense(expense: any) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.data = expense;
        // open correct dialog expense
        const dialogRef = this.revenueDialog.open(EditExpenseDialogComponent, dialogConfig);

        // get data back
        dialogRef.afterClosed().subscribe(result => {
            // update expense in list
            if (result) {
                this.apiService.updateExpense(result.expenseId, result).subscribe(() => {
                    this.apiService.getExpenseByUserId(this.user.userId).subscribe(updatedExpense => {
                        this.expense = updatedExpense;
                        this.cdr.detectChanges();
                    });
                });
            }
        });
    }
}
