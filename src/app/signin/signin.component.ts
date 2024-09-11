import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatCard } from '@angular/material/card';
import { SignInService } from './signin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ CommonModule, MatFormFieldModule, MatButtonModule,
    ReactiveFormsModule, MatInputModule, MatCard],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SignInComponent {
  submitStatus = '';
  loginErrorMsg = '';
  formulario: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private SigninProvider: SignInService,
    private router: Router
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
    this.loginErrorMsg = "Email ou senha inválidos";

    if (this.submitStatus !== 'VALID') return;
    
    this.SigninProvider.getAccessToken(this.formulario);
    this.formulario.reset();
  }

  getErrorHint(control: string){
    if(!this.formulario.controls[control].errors)
      return;
    if (this.formulario.controls[control].value === "")
      return "Este campo é obrigatório";
    return `Insira um ${control} válido`;
  }

  setLoginView(){
    this.router.navigate(['/signup']);
  }
}
