import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { SignUpService } from './signup.service';
import { BehaviorSubject } from 'rxjs';

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
  signupErrorMsg$: BehaviorSubject<string>;
  submitStatus = '';

  @Output() toggleView = new EventEmitter();

  constructor(
    private SignupProvider: SignUpService,
    private formBuilder: FormBuilder,
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

  setLoginView(){
    this.signupErrorMsg$.next("");
    this.toggleView.emit();
  }

  getErrorHint(control: string){
    if( !this.formulario.controls[control].errors ) return;
    if ( this.formulario.controls[control].value === "" )
      return "Este campo é obrigatório"; 
    return `Insira um ${control} válido`;
  }

}
