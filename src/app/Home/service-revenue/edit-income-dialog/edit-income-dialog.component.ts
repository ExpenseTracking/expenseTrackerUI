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

    ngOnInit() {
        // store incoming income info
        this.income = this.data;

        this.apiService.getIncomeSource().subscribe((data: incomeSource[]) => {
            this.incomeSources = data;
        });
    }

    // function to update value of income button string
    updateIncomeSourceButton(source: string, sourceId?: number): void {
        this.income.incomeSourceName = source;
        this.income.incomeSourceId = sourceId !== undefined ? sourceId: 0;
    }

    // close dialog and send back 'create' to page
    onConfirm(): void {
        this.dialogRef.close(this.income);
    }

    // if user cancels edit operation
    onCancel(): void {
        this.dialogRef.close();
    }
}
