import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ApiService } from '../../../Shared/app.service';
import { incomeSource, Income } from "../../../Shared/models";

@Component({
    selector: 'app-edit-income-dialog',
    templateUrl: './edit-income-dialog.component.html',
    styleUrl: './edit-income-dialog.component.css'
})
export class EditIncomeDialogComponent implements OnInit {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private apiService: ApiService,
        private dialogRef: MatDialogRef<EditIncomeDialogComponent>
    ) { }

    // pull and hold data from API for dropdown list
    income!: Income;
    incomeSources: incomeSource[] = [];

    // Variables to store income details
    // incomeSourceName!: string;
    // incomeSourceId!: number;
    // incomeAmount!: number;
    // incomeDate!: Date;
    // incomeDescription!: string;

    ngOnInit() {
        // store incoming income info
        this.income = this.data;
        // income data
        // this.apiService.getIncomeByUserId(3).subscribe((data: Income[]) => {
        //     this.income = data;

        //     // data for source/type button dropdown
        //     for (let incomeItem of this.income) {
        //         if (incomeItem.incomeId == this.data.row) {
        //             this.incomeSourceId = incomeItem.incomeSourceId;
        //             this.incomeSourceName = incomeItem.incomeSourceName;
        //             this.incomeAmount = incomeItem.amount;
        //             this.incomeDate = incomeItem.date;
        //             this.incomeDescription = incomeItem.description;
        //         }
        //     }
        // });

        this.apiService.getIncomeSource().subscribe((data: incomeSource[]) => {
            this.incomeSources = data;
        });
    }

    // function to update value of income button string
    updateIncomeSourceButton(source: string): void {
        this.income.incomeSourceName = source;
    }

    // close dialog and send back 'create' to page
    onConfirm(): void {
        // const incomeDetails = {
        //     incomeId: this.data.row,
        //     userId: 3,
        //     incomeSourceId: this.incomeSourceId,
        //     amount: this.incomeAmount,
        //     date: this.incomeDate,
        //     description: this.incomeDescription,
        //     action: 'updateIncome'
        // };
        this.dialogRef.close(this.income);
    }

    // if user cancels edit operation
    onCancel(): void {
        this.dialogRef.close();
    }
}
