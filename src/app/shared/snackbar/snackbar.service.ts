import { Injectable, inject } from '@angular/core';
import { SnackbarComponent } from './snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  private _snackBar = inject(MatSnackBar);

  readonly snackbarDurationInSecs = 5;

  constructor() { }
  
  openSnackBar(config: Record<string, any>) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: this.snackbarDurationInSecs * 1000, data : {
        message: config['message'],
        icon: config['icon']
      }
    });
  }
}
