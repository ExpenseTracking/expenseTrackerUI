import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { ApiService } from '../../../Shared/app.service';
import { Income, incomeSource } from "../../../Shared/models"

@Component({
    selector: 'app-add-income-dialog',
    templateUrl: './add-income-dialog.component.html',
    styleUrl: './add-income-dialog.component.css'
})
export class AddIncomeDialogComponent implements OnInit {
    // variables to hold new income details
    userId: number = 3;
    incomeSourceId: number = 0;
    amount: number = 0;
    date!: Date;
    description: string = '';

    constructor(private apiService: ApiService,
        private dialogRef: MatDialogRef<AddIncomeDialogComponent>) { }

    // pull and hold data from API for dropdown list
    incomeSources: incomeSource[] = [];

    ngOnInit() {
        // get list of income sources
        this.apiService.getIncomeSource().subscribe((data: incomeSource[]) => {
            this.incomeSources = data;
        })
    }

    // data for source button dropdown
    incomeSourceButton = 'Select income source';

    // function to update value of income button string
    updateIncomeSourceButton(source: string, sourceId?: number): void {
        this.incomeSourceButton = source;
        this.incomeSourceId = sourceId !== undefined ? sourceId: 0;
    }

    // close dialog and send back 'create' to page
    onConfirm(): void {
        // validate user input info
        if (this.incomeSourceId != 0 &&
            this.amount != 0 &&
            this.description.trim() !== '' &&
            this.date) {

            // new income model to hold info
            const newIncome: Income = {
                userId: this.userId,
                incomeSourceId: this.incomeSourceId,
                amount: this.amount,
                date: this.date,
                description: this.description,
                CreatedAt: new Date,
                updatedAt: new Date,
                deletedAt: new Date,
                isDeleted: false,
                incomeSourceName: '',
                userName: ''
            }

            this.dialogRef.close(newIncome);
        }
    }

    // if user cancels add operation
    onCancel(): void {
        this.dialogRef.close();
    }
}
