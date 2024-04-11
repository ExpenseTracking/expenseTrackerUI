import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

import { ApiService } from '../../../Shared/app.service';
import { Goal } from '../../../Shared/models/goal';

@Component({
  selector: 'app-edit-goal-dialog',
  templateUrl: './edit-goal-dialog.component.html',
  styleUrl: './edit-goal-dialog.component.css'
})
export class EditGoalDialogComponent {
  //data variable to hold incoming string argument
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService,
    private dialogRef: MatDialogRef<EditGoalDialogComponent>
  ) { }

  //pull and hold data from API
  goal: Goal[] = [];

  //variables to store incoming details
  goalDescription!: string;
  goalDate!: Date;
  goalDeadline!: Date;
  isCompleted!: boolean;

  ngOnInit() {

    //goals data
    this.apiService.getGoalsById(3).subscribe((data: Goal[]) => {
      this.goal = data;

      //data for goal properties
      for (let goalItem of this.goal) {
        if (goalItem.goalId == this.data.row) {
          this.goalDescription = goalItem.description;
          this.goalDate = goalItem.date;
          this.goalDeadline = goalItem.deadline;
          this.isCompleted = goalItem.isCompleted;
        }
      }
    });
  }

  //update completed status button
  updateCompleted(source: boolean): void {
    this.isCompleted = source;
  }

  //close dialog and send back 'updateGoal' to page
  onConfirmGoal(): void {
    const goalDetails = {
      goalId: this.data.row,
      userId: 3,
      description: this.goalDescription,
      deadline: this.goalDeadline,
      date: this.goalDate,
      isCompleted: this.isCompleted,
      action: 'updateGoal'
    };
    this.dialogRef.close(goalDetails);
  }
}
