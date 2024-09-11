import {Component, inject, Inject} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';


@Component({
  selector: 'inner-snackbar',
  template: `
    <span class="example-pizza-party" matSnackBarLabel>
      {{data.message}}
    </span>
    <span matSnackBarActions>
      <button mat-button matSnackBarAction (click)="snackBarRef.dismissWithAction()">{{data.icon}}</button>
    </span>`,
  styles: `
    :host {
      display: flex;
    }

    .example-pizza-party {
      color: hotpink;
    }
  `,
  standalone: true,
  imports: [ MatSnackBarLabel, MatSnackBarActions, 
    MatSnackBarAction, MatButtonModule],
})
export class SnackbarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }
  snackBarRef = inject(MatSnackBarRef);
}