import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { DeleteRevenueDialogComponent } from '../delete-revenue-dialog/delete-revenue-dialog.component';
import { AddIncomeDialogComponent } from '../add-income-dialog/add-income-dialog.component';
import { Income } from '../../../Shared/models';
import { ApiService } from '../../../Shared/app.service';
import { EditIncomeDialogComponent } from '../edit-income-dialog/edit-income-dialog.component';
import { user } from '../../../Shared/models';
import { AuthService } from '../../../Shared/auth.service';

@Component({
    selector: 'app-income',
    templateUrl: './income.component.html',
    styleUrl: './income.component.css'
})
export class IncomeComponent implements OnInit {
    // columns for data table
    incomeColumns: string[] = ['incomeSourceName', 'amount', 'date', 'description', 'buttons'];

    // data variable to hold info
    income: Income[] = [];
    user: user;

    // injecting components/services via constructor
    constructor(private apiService: ApiService,
        private revenueDialog: MatDialog,
        private cdr: ChangeDetectorRef,
        private authService: AuthService) {
        this.user = authService.getUser();
    }

    ngOnInit() {
        // income data
        this.apiService.getIncomeByUserId(this.user.userId).subscribe((data: Income[]) => {
            this.income = data;
        })
    }
    // method to delete row of data when user clicks delete
    deleteIncome(incomeId: any) {
        // open dialog window
        const dialogRef = this.revenueDialog.open(DeleteRevenueDialogComponent);

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.apiService.deleteIncome(incomeId).subscribe(() => {
                    this.apiService.getIncomeByUserId(this.user.userId).subscribe(updatedIncome => {
                        this.income = updatedIncome;
                        this.cdr.detectChanges();
                    });
                });
            }
        });
    }

    // method to open dialog for adding new income
    addIncome(userId: number) {
        const dialogRef = this.revenueDialog.open(AddIncomeDialogComponent, {
            data: { userId }
        });

        // get data back
        dialogRef.afterClosed().subscribe(result => {
            // add new income to list
            if (result) {
                this.apiService.addIncome(result).subscribe(() => {
                    this.apiService.getIncomeByUserId(this.user.userId).subscribe(updatedIncome => {
                        this.income = updatedIncome;
                        this.cdr.detectChanges();
                    });
                });
            }
        });
    }

    // method to update revenue
    editIncome(income: any) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.data = income;
        // open correct dialog income
        const dialogRef = this.revenueDialog.open(EditIncomeDialogComponent, dialogConfig);

        // get data back
        dialogRef.afterClosed().subscribe(result => {
            // update income in list
            if (result) {
                this.apiService.updateIncome(result.incomeId, result).subscribe(() => {
                    this.apiService.getIncomeByUserId(this.user.userId).subscribe(updatedIncome => {
                        this.income = updatedIncome;
                        this.cdr.detectChanges();
                    });
                });
            }
        });
    }
}
