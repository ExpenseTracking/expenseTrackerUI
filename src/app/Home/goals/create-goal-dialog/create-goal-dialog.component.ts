import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

import { Goal } from '../../../Shared/models/goal';
import { user } from '../../../Shared/models';

@Component({
    selector: 'app-create-goal-dialog',
    templateUrl: './create-goal-dialog.component.html',
    styleUrl: './create-goal-dialog.component.css'
})
export class CreateGoalDialogComponent {
    user!: user;
    goalDetails: Goal;

    //data variable to hold incoming arguments
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private dialogRef: MatDialogRef<CreateGoalDialogComponent>
    ) {
        this.user = data.user;
        //object to hold new goal details
        this.goalDetails = {
            goalId: 0,
            userId: this.user.userId,
            description: '',
            date: new Date,
            deadline: new Date,
            isCompleted: false,
            createdAt: new Date,
            updatedAt: new Date,
            deletedAt: new Date,
            isDeleted: false
        }
    }

    //close dialog and send 'createGoal' to page
    onConfirmGoal(): void {
        this.dialogRef.close(this.goalDetails);
    }
}
