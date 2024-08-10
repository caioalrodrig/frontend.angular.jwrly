import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { SignUpService } from './signup.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ CommonModule, MatFormFieldModule, MatButtonModule,
    ReactiveFormsModule, MatInputModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignUpComponent {
  formulario: FormGroup;
  signupErrorMsg: string;
  @Output() toggleView = new EventEmitter();

  constructor(
    private SignupProvider: SignUpService,
    private formBuilder: FormBuilder,
  ){
    this.signupErrorMsg = '';
    this.formulario = this.formBuilder.group({
      name: [null, Validators.required], 
      email: [null, Validators.compose([
        Validators.required, 
        Validators.email
      ])],
      password: [null, Validators.required]
    });
  }

  onSubmit(){}

  setLoginView(){
    this.toggleView.emit();
  }
}
