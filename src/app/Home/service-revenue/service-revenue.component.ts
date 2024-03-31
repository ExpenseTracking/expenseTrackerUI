import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';

import { DeleteRevenueDialogComponent } from './delete-revenue-dialog/delete-revenue-dialog.component';
import { AddNewRevenueDialogComponent } from './add-new-revenue-dialog/add-new-revenue-dialog.component';
import { Income, Expense } from '../../Shared/models';
import { ApiService } from '../../Shared/app.service';

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
        this.apiService.getIncomeByUserId(999).subscribe((data: Income[]) => {
            this.income = data;
        })

        // expense data
        this.apiService.getExpenseByUserId(999).subscribe((data: Expense[]) => {
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
                    this.apiService.getIncomeByUserId(999).subscribe(updatedIncome => {
                        this.income = updatedIncome;
                        this.cdr.detectChanges();
                    });
                });
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

    // method to open dialog for adding new income
    addNewRevenue(revenueType: string) {
        const dialogRef = this.addNewRevenueDialog.open(AddNewRevenueDialogComponent, {
            data: { revenueType }
        });
    }
}
