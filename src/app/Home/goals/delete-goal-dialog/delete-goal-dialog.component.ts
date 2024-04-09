import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-goal-dialog',
  templateUrl: './delete-goal-dialog.component.html',
  styleUrl: './delete-goal-dialog.component.css'
})
export class DeleteGoalDialogComponent {
    constructor(private dialogRef: MatDialogRef<DeleteGoalDialogComponent>) {}

    onConfirm(): void {
        this.dialogRef.close('delete');
    }
}
