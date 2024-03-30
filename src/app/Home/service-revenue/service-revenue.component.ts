import { Component } from '@angular/core';
import { mockIncome } from './mock-income';
import { mockExpense } from './mock-expense';
import { DeleteRevenueDialogComponent } from './delete-revenue-dialog/delete-revenue-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-service-revenue',
    templateUrl: './service-revenue.component.html',
    styleUrl: './service-revenue.component.css'
})
export class ServiceRevenueComponent {
    // columns for data tables
    incomeColumns: string[] = ['source', 'amount', 'date', 'description', 'buttons'];
    expenseColumns: string[] = ['type', 'amount', 'date', 'description', 'buttons'];

    // dummy data arrays
    income = mockIncome;
    expense = mockExpense;

    // injecting DRD component via constructor
    constructor(private deleteRevenueDialog: MatDialog) { }

    // method to delete row of data when user clicks delete
    deleteIncomeRow(row: any) {
        // open dialog window
        const dialogRef = this.deleteRevenueDialog.open(DeleteRevenueDialogComponent);

        dialogRef.afterClosed().subscribe(result => {
            if (result === 'delete') {
                // user confirmed deletion
                const index = this.income.indexOf(row);
                if (index !== -1) {
                    this.income.splice(index, 1);
                }
            }
        });
    }

    // method to delete row of data when user clicks delete
    deleteExpenseRow(row: any) {
        // open dialog window
        const dialogRef = this.deleteRevenueDialog.open(DeleteRevenueDialogComponent);

        dialogRef.afterClosed().subscribe(result => {
            if (result === 'delete') {
                // user confirmed deletion
                const index = this.expense.indexOf(row);
                if (index !== -1) {
                    this.expense.splice(index, 1);
                }
            }
        });
    }
}
