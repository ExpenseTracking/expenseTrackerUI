import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';

import { Goal } from '../../Shared/models/goal';
import { ApiService } from '../../Shared/app.service';
import { DeleteGoalDialogComponent } from './delete-goal-dialog/delete-goal-dialog.component';
import { EditGoalDialogComponent } from './edit-goal-dialog/edit-goal-dialog.component';
import { CreateGoalDialogComponent } from './create-goal-dialog/create-goal-dialog.component';


@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.css'
})
export class GoalsComponent implements OnInit {
  // columns for goal data
  goalColumns: string[] = ['description', 'date', 'deadline', 'completed', 'buttons'];

  //data variable to hold goals
  goal: Goal[] = [];

  constructor(private apiService: ApiService,
    private goalDialog: MatDialog,
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.apiService.getGoalsById(3).subscribe((data: Goal[]) => {
      this.goal = data;
    })
  }

  deleteGoalRow(goalId: any) {
    const dialogRef = this.goalDialog.open(DeleteGoalDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'delete') {
        console.log(result);
        this.apiService.deleteGoal(goalId).subscribe(() => {
          this.apiService.getGoalsById(3).subscribe(updatedGoal => {
            this.goal = updatedGoal;
            this.cdr.detectChanges();
          });
        });
      }
    });
  }

  editGoal(row: any) {
    const dialogRef = this.goalDialog.open(EditGoalDialogComponent, {
      data: {row}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.action === 'updateGoal') {
        this.apiService.updateGoal(result.goalId, result).subscribe(() => {
          this.apiService.getGoalsById(3).subscribe(updatedGoal => {
            this.goal = updatedGoal;
            this.cdr.detectChanges();
          });
        });
      }
    });
  }

  createGoal() {
    const dialogRef = this.goalDialog.open(CreateGoalDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result.action === 'createGoal') {
        this.apiService.createGoal(result).subscribe(() => {
          this.apiService.getGoalsById(3).subscribe(updatedGoal => {
            this.goal = updatedGoal;
            this.cdr.detectChanges();
          });
        });
      }
    });
  }
}
