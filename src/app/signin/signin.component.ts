import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { SignInService } from './signin.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ CommonModule, MatFormFieldModule, MatButtonModule,
    ReactiveFormsModule, MatInputModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SignInComponent {
  submitStatus = '';
  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private SigninProvider: SignInService
  ){
    this.formulario = this.formBuilder.group({
      email: [null, Validators.compose([
        Validators.required, 
        Validators.email
      ])],
      password: [null, Validators.required]
    });
  }

  onSubmit() {
    this.submitStatus = this.formulario.status;
    if (this.submitStatus !== 'VALID') return;
    
    this.SigninProvider.getAccessToken(this.formulario);
    this.formulario.reset();
  }

  getErrorHint(control: string){
    if(!this.formulario.controls[control].errors) return;
    if (control === "email") return "Este campo é obrigatório";
    if (control === "password") return "Favor informe uma senha";
    return '';
  }
}
