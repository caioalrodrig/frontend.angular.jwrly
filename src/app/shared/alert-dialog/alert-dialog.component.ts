import {ChangeDetectionStrategy, Component, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
  MatDialogModule,
  MatDialogRef
} from '@angular/material/dialog';
import {CommonModule} from '@angular/common';
 
@Component({
  selector: 'app-alert-dialog',
  template: '',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertDialogComponent implements OnInit {
  readonly dialog = inject(MatDialog);

  dialogRef: MatDialogRef<DialogViewComponent> | null = null;

  @Output() onInit = new EventEmitter();

  ngOnInit() {
    this.onInit.emit();
    this.openDialog();
    setTimeout(() =>{
      this.dialogRef!.close();
    }, 4000);
  }

  openDialog() {
    this.dialogRef = this.dialog.open(DialogViewComponent);
  }
}
@Component({
  selector: 'dialog-view',
  template: `
    <h2 mat-dialog-title>Bem vindo, user</h2>
    <mat-dialog-content>
      <p>Que tal começar pesquisando por um relógio?</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>Dispensar</button>
    </mat-dialog-actions>
  `,
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogViewComponent {}