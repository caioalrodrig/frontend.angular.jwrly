import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ CommonModule, MatFormFieldModule, MatButtonModule,
    ReactiveFormsModule, MatInputModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  constructor(
  ){}
}
