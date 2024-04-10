import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

import { ApiService } from '../../../Shared/app.service';
import { Goal } from '../../../Shared/models/goal';

@Component({
  selector: 'app-create-goal-dialog',
  templateUrl: './create-goal-dialog.component.html',
  styleUrl: './create-goal-dialog.component.css'
})
export class CreateGoalDialogComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
        private apiService: ApiService,
        private dialogRef: MatDialogRef<CreateGoalDialogComponent>) {}

    //pull and hold data from API for goal properties
    goal: Goal[] = [];

    //object to hold new goal details
    goalDetails = {
      userId: 3,
      description: '',
      date: 0,
      deadline: 0,
      action: ''
    }

    //close dialog and send 'createGoal' to page
    onConfirmGoal(): void {
      this.goalDetails.action = 'createGoal';
      this.dialogRef.close(this.goalDetails);
    }
}
