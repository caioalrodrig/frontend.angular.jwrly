import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { SignInService } from './signin.service';
import { catchError, Observable, of, Subject, take } from 'rxjs';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ CommonModule, MatFormFieldModule, MatButtonModule,
    ReactiveFormsModule, MatInputModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SignInComponent {
  formulario: FormGroup;
  submitStatus = '';
  signedIn$ = new Subject<boolean>();
  signInLoading$ = new Subject<boolean>();

  constructor(
    private formBuilder: FormBuilder,
    private signInService: SignInService
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
    
    this.signInLoading$.next(true); 

    this.signInService.getAccessToken(this.formulario)
    .pipe(
      catchError(error => {
        this.signedIn$.next(false);
        this.signInLoading$.next(false); 
        return of();
      }),
      take(1)
    )
    .subscribe(() => {
      this.signedIn$.next(true); 
      this.signInLoading$.next(false); 
      this.formulario.reset();
    });
  }

  getErrorHint(control: string){
    if(!this.formulario.controls[control].errors) return;
    if (control === "email") return "Este campo é obrigatório";
    if (control === "password") return "Favor informe uma senha";
    return '';
  }
}
