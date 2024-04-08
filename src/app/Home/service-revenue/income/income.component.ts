import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DeleteRevenueDialogComponent } from '../delete-revenue-dialog/delete-revenue-dialog.component';
import { AddIncomeDialogComponent } from '../add-income-dialog/add-income-dialog.component';
import { Income } from '../../../Shared/models';
import { ApiService } from '../../../Shared/app.service';
import { EditIncomeDialogComponent } from '../edit-income-dialog/edit-income-dialog.component';

@Component({
    selector: 'app-income',
    templateUrl: './income.component.html',
    styleUrl: './income.component.css'
})
export class IncomeComponent implements OnInit {
    // columns for data table
    incomeColumns: string[] = ['incomeSourceName', 'amount', 'date', 'description', 'buttons'];

    // data variable to hold income
    income: Income[] = [];

    // injecting components/services via constructor
    constructor(private apiService: ApiService,
        private revenueDialog: MatDialog,
        private cdr: ChangeDetectorRef) { }

    ngOnInit() {
        // income data
        this.apiService.getIncomeByUserId(3).subscribe((data: Income[]) => {
            this.income = data;
        })
    }
    // method to delete row of data when user clicks delete
    deleteIncome(incomeId: any) {
        // open dialog window
        const dialogRef = this.revenueDialog.open(DeleteRevenueDialogComponent);

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

    // method to open dialog for adding new income
    addIncome() {
        const dialogRef = this.revenueDialog.open(AddIncomeDialogComponent);

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
        });
    }

    // method to update revenue
    editIncome(row: any) {
        // open correct dialog income
        const dialogRef = this.revenueDialog.open(EditIncomeDialogComponent, {
            data: { row }
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
        });
    }
}
