import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { Goal } from '../../Shared/models/goal';
import { ApiService } from '../../Shared/app.service';
import { DeleteGoalDialogComponent } from './delete-goal-dialog/delete-goal-dialog.component';
import { EditGoalDialogComponent } from './edit-goal-dialog/edit-goal-dialog.component';
import { CreateGoalDialogComponent } from './create-goal-dialog/create-goal-dialog.component';
import { user } from '../../Shared/models';
import { AuthService } from '../../Shared/auth.service';


@Component({
    selector: 'app-goals',
    templateUrl: './goals.component.html',
    styleUrl: './goals.component.css'
})
export class GoalsComponent implements OnInit {
    // columns for goal data
    goalColumns: string[] = ['description', 'date', 'deadline', 'completed', 'buttons'];

    //data variable to hold info
    goal: Goal[] = [];
    user$: Observable<user | null>;
    user: user | null = null;

    constructor(private apiService: ApiService,
        private goalDialog: MatDialog,
        private cdr: ChangeDetectorRef,
        private authService: AuthService) {
    }

    ngOnInit() {
        // assign observable
        this.user$ = this.authService.getUser();

        // subscribe to this observable
        this.user$.subscribe((userChanges: user | null) => {
            this.user = userChanges;
        });

        // get user's goals
        if (this.user) {
            this.apiService.getGoalsById(this.user.userId).subscribe((data: Goal[]) => {
                this.goal = data;
            })
        }
    }

    deleteGoalRow(goalId: any) {
        const dialogRef = this.goalDialog.open(DeleteGoalDialogComponent);

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.apiService.deleteGoal(goalId).subscribe(() => {
                    this.apiService.getGoalsById(this.user.userId).subscribe(updatedGoal => {
                        this.goal = updatedGoal;
                        this.cdr.detectChanges();
                    });
                });
            }
        });
    }

    editGoal(row: any) {
        const dialogRef = this.goalDialog.open(EditGoalDialogComponent, {
            data: { row, user: this.user }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result.action === 'updateGoal') {
                this.apiService.updateGoal(result.goalId, result).subscribe(() => {
                    this.apiService.getGoalsById(this.user.userId).subscribe(updatedGoal => {
                        this.goal = updatedGoal;
                        this.cdr.detectChanges();
                    });
                });
            }
        });
    }

    createGoal() {
        const dialogRef = this.goalDialog.open(CreateGoalDialogComponent, {
            data: { user: this.user }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.apiService.createGoal(result).subscribe(() => {
                    this.apiService.getGoalsById(this.user.userId).subscribe(updatedGoal => {
                        this.goal = updatedGoal;
                        this.cdr.detectChanges();
                    });
                });
            }
        });
    }
}
