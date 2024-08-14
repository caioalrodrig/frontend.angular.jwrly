import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Router, ActivatedRoute, RouterOutlet, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SignInService } from './signin/signin.service';
import { SignInComponent } from './signin/signin.component';
import { SignUpService } from './signup/signup.service';
import { SignUpComponent } from './signup/signup.component';
import { AlertDialogComponent } from './shared/alert-dialog/alert-dialog.component';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppComponent, 
    SignInComponent, SignUpComponent,
    AlertDialogComponent, MatIconModule,
    CommonModule, RouterOutlet, RouterModule,
    MatButtonModule, MatCard,
    MatToolbarModule, MatSelectModule],
  exportAs: "backend",
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit{
  icon = 'menu';
  currentRoute = '';
  successLogin = true;
  loggedin$;
  signupView;

  constructor(
    private router: Router,
    private route: ActivatedRoute,    
    private SigninProvider: SignInService,
    private SignupProvider: SignUpService 
  ) {
    this.loggedin$ = this.SigninProvider.signedin$;
    this.signupView = true;
  }

  ngOnInit(): void {
  }

  getForm(submiText: HTMLInputElement): void{
    console.log(submiText.value);
  }

  navigateTo(subroute: string): void {
    this.currentRoute === '' ? this.icon = 'arrow_back' : this.icon = 'menu'; 
    this.currentRoute === '' ? this.currentRoute = `tab/${subroute}` 
     : this.currentRoute = '';
    this.router.navigate([this.currentRoute]);
    
  }

  alertSuccessLogin(){
    this.successLogin = false;
  }

  setLoginView() {
    this.signupView = !this.signupView;
  }
}
