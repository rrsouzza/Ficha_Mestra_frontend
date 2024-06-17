import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackbar: MatSnackBar) { }

  openSnackbar(message: string, action: string, durationInMs?: number): Observable<void> {
    const snackbarRef = this._snackbar.open(message, action, { duration: durationInMs || 5000 });

    snackbarRef.onAction().subscribe({
      next: () => {
        switch (action.toUpperCase()) {
          case 'FECHAR':
            snackbarRef.dismiss();
            break;
          default:
        };
      },
    });

    return snackbarRef.onAction();
  }
}
