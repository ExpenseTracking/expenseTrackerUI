import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';

import { DeleteRevenueDialogComponent } from './delete-revenue-dialog/delete-revenue-dialog.component';
import { AddNewRevenueDialogComponent } from './add-new-revenue-dialog/add-new-revenue-dialog.component';
import { Income, Expense } from '../../Shared/models';
import { ApiService } from '../../Shared/app.service';
import { EditRevenueDialogComponent } from './edit-revenue-dialog/edit-revenue-dialog.component';

@Component({
    selector: 'app-service-revenue',
    templateUrl: './service-revenue.component.html',
    styleUrl: './service-revenue.component.css'
})
export class ServiceRevenueComponent implements OnInit {
    // columns for data tables
    incomeColumns: string[] = ['incomeSourceName', 'amount', 'date', 'description', 'buttons'];
    expenseColumns: string[] = ['type', 'amount', 'date', 'description', 'buttons'];

    // data variable to hold income and expenses
    income: Income[] = [];
    expense: Expense[] = [];

    // injecting components/services via constructor
    constructor(private apiService: ApiService,
        private deleteRevenueDialog: MatDialog,
        private addNewRevenueDialog: MatDialog,
        private datePipe: DatePipe,
        private cdr: ChangeDetectorRef) { }

    ngOnInit() {
        // income data
        this.apiService.getIncomeByUserId(3).subscribe((data: Income[]) => {
            this.income = data;
        })

        // expense data
        this.apiService.getExpenseByUserId(3).subscribe((data: Expense[]) => {
            this.expense = data;
        })
    }
    // method to delete row of data when user clicks delete
    deleteIncomeRow(incomeId: any) {
        // open dialog window
        const dialogRef = this.deleteRevenueDialog.open(DeleteRevenueDialogComponent);

        dialogRef.afterClosed().subscribe(result => {
            if (result === 'delete') {
                this.apiService.deleteIncome(incomeId).subscribe(() => {
                    this.apiService.getIncomeByUserId(3).subscribe(updatedIncome => {
                        this.income = updatedIncome;
                        this.cdr.detectChanges();
                    });
                });
            }
        });
    }

    // method to delete row of data when user clicks delete
    deleteExpenseRow(expenseId: any) {
        // open dialog window
        const dialogRef = this.deleteRevenueDialog.open(DeleteRevenueDialogComponent);

        dialogRef.afterClosed().subscribe(result => {
            if (result === 'delete') {
                this.apiService.deleteExpense(expenseId).subscribe(() => {
                    this.apiService.getExpenseByUserId(3).subscribe(updatedExpense => {
                        this.income = updatedExpense;
                        this.cdr.detectChanges();
                    });
                });
            }
        });
    }

    // method to open dialog for adding new income
    addNewRevenue(revenueType: string) {
        const dialogRef = this.addNewRevenueDialog.open(AddNewRevenueDialogComponent, {
            data: { revenueType }
        });

        // get data back
        dialogRef.afterClosed().subscribe(result => {
            // add new income to list
            if (result.action === 'createIncome') {
                this.apiService.addIncome(result).subscribe(() => {
                    this.apiService.getIncomeByUserId(3).subscribe(updatedIncome => {
                        this.income = updatedIncome;
                        this.cdr.detectChanges();
                    });
                });
            }
            // add new expense to list
            else if (result.action === 'createExpense') {
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
    editRevenue(revenueType: string, row: any) {
        // open correct dialog income or expense
        const dialogRef = this.addNewRevenueDialog.open(EditRevenueDialogComponent, {
            data: { revenueType, row }
        });

        // get data back
        dialogRef.afterClosed().subscribe(result => {
            // update income in list
            if (result.action === 'updateIncome') {
                this.apiService.updateIncome(result.incomeId, result).subscribe(() => {
                    this.apiService.getIncomeByUserId(3).subscribe(updatedIncome => {
                        this.income = updatedIncome;
                        this.cdr.detectChanges();
                    });
                });
            }
            // update expense in list
            else if (result.action === 'updateExpense') {
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
