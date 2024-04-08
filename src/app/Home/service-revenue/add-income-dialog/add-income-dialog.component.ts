import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { ApiService } from '../../../Shared/app.service';
import { incomeSource } from "../../../Shared/models"

@Component({
    selector: 'app-add-income-dialog',
    templateUrl: './add-income-dialog.component.html',
    styleUrl: './add-income-dialog.component.css'
})
export class AddIncomeDialogComponent {
    // data variable to hold incoming string argument
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
    updateIncomeSourceButton(source: string): void {
        this.incomeSourceButton = source;
    }

    // object to hold new income details
    incomeDetails = {
        userId: 3,
        incomeSourceId: 0,
        amount: 0,
        date: 0,
        description: '',
        action: ''
    };

    // close dialog and send back 'create' to page
    onConfirmIncome(): void {
        this.incomeDetails.action = 'createIncome';
        this.dialogRef.close(this.incomeDetails);
    }
}
