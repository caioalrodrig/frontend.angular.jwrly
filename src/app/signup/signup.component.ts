import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCard } from '@angular/material/card';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { SignUpService } from './signup.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ CommonModule, MatFormFieldModule, MatButtonModule,
    ReactiveFormsModule, MatInputModule, MatCard],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignUpComponent {
  formulario: FormGroup;
  signupErrorMsg$: BehaviorSubject<string>;
  submitStatus = '';

  @Output() toggleView = new EventEmitter();

  constructor(
    private SignupProvider: SignUpService,
    private formBuilder: FormBuilder,
    private router: Router
  ){
    this.signupErrorMsg$ = this.SignupProvider.signupMsg$;
    this.formulario = this.formBuilder.group({
      name: [null, Validators.required], 
      email: [null, Validators.compose([
        Validators.email,
        Validators.required
      ])],
      password: [null, Validators.required]
    });
  }

  onSubmit() {
    this.submitStatus = this.formulario.status;
    if (this.submitStatus !== 'VALID') return;
    
    this.SignupProvider.getCreateUserResponse(this.formulario);
  }

  getErrorHint(control: string){
    if( !this.formulario.controls[control].errors ) return;
    if ( this.formulario.controls[control].value === "" )
      return "Este campo é obrigatório"; 
    return `Insira um ${control} válido`;
  }

  setLoginView(){
    this.router.navigate(['/signin']);
  }
}
