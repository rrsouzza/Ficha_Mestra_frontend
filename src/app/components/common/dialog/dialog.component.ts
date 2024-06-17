import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  cancelText: string;
  confirmText: string;
  message: string;
  title: string;
  dialogTime: number;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  secondsLeft!: number;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,

    @Inject(MAT_DIALOG_DATA)
    public data: DialogData,
  ) {
    if (data.dialogTime && data.dialogTime > 0) this.startTimer();
  }

  startTimer() {
    this.secondsLeft = this.data.dialogTime;

    const timer = setInterval(() => {
      this.secondsLeft -= 1;

      if (this.secondsLeft === 0) {
        clearInterval(timer);
        this.close(false);
      }
    }, 1000);
  }

  public cancel() {
    this.close(false);
  }

  public close(value: any) {
    this.dialogRef.close(value);
  }

  public confirm() {
    this.close(true);
  }
}
