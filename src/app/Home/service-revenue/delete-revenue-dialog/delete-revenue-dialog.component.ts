import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-delete-revenue-dialog',
    templateUrl: './delete-revenue-dialog.component.html',
    styleUrl: './delete-revenue-dialog.component.css'
})
export class DeleteRevenueDialogComponent {
    // injecting dialog ref to send user choice to page
    constructor(private dialogRef: MatDialogRef<DeleteRevenueDialogComponent>) { }

    // close dialog and send back 'delete' to page
    onConfirm(): void {
        this.dialogRef.close('delete');
    }
}
