import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DeleteRevenueDialogComponent } from '../delete-revenue-dialog/delete-revenue-dialog.component';
import { AddRevenueDialogComponent } from '../add-revenue-dialog/add-revenue-dialog.component';
import { Expense } from '../../../Shared/models';
import { ApiService } from '../../../Shared/app.service';
import { EditRevenueDialogComponent } from '../edit-revenue-dialog/edit-revenue-dialog.component';

@Component({
    selector: 'app-expense',
    templateUrl: './expense.component.html',
    styleUrl: './expense.component.css'
})
export class ExpenseComponent {
    // columns for data tables
    expenseColumns: string[] = ['type', 'amount', 'date', 'description', 'buttons'];

    // data variable to hold expense
    expense: Expense[] = [];

    // injecting components/services via constructor
    constructor(private apiService: ApiService,
        private revenueDialog: MatDialog,
        private cdr: ChangeDetectorRef) { }

    ngOnInit() {
        // expense data
        this.apiService.getExpenseByUserId(3).subscribe((data: Expense[]) => {
            this.expense = data;
        })
    }

    // method to delete row of data when user clicks delete
    deleteExpense(expenseId: any) {
        // open dialog window
        const dialogRef = this.revenueDialog.open(DeleteRevenueDialogComponent);

        dialogRef.afterClosed().subscribe(result => {
            if (result === 'delete') {
                this.apiService.deleteExpense(expenseId).subscribe(() => {
                    this.apiService.getExpenseByUserId(3).subscribe(updatedExpense => {
                        this.expense = updatedExpense;
                        this.cdr.detectChanges();
                    });
                });
            }
        });
    }

    // method to open dialog for adding new expense
    addExpense(revenueType: string) {
        const dialogRef = this.revenueDialog.open(AddRevenueDialogComponent, {
            data: { revenueType }
        });

        // get data back
        dialogRef.afterClosed().subscribe(result => {
            // add new expense to list
            if (result.action === 'createExpense') {
                this.apiService.addExpense(result).subscribe(() => {
                    this.apiService.getExpenseByUserId(3).subscribe(updateExpense => {
                        this.expense = updateExpense;
                        this.cdr.detectChanges();
                    });
                });
            }
        });
    }

    // method to update revenue
    editExpense(revenueType: string, row: any) {
        // open correct dialog income or expense
        const dialogRef = this.revenueDialog.open(EditRevenueDialogComponent, {
            data: { revenueType, row }
        });

        // get data back
        dialogRef.afterClosed().subscribe(result => {
            // update expense in list
            if (result.action === 'updateExpense') {
                this.apiService.updateExpense(result.expenseId, result).subscribe(() => {
                    this.apiService.getExpenseByUserId(3).subscribe(updateExpense => {
                        this.expense = updateExpense;
                        this.cdr.detectChanges();
                    });
                });
            }
        });
    }
}
