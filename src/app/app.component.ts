import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Router, ActivatedRoute, RouterOutlet, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SignInService } from './signin/signin.service';
import { SignInComponent } from './signin/signin.component';
import { IUserSession } from './signin/signin.interface';
import { SignUpService } from './signup/signup.service';
import { SignUpComponent } from './signup/signup.component';
import { AlertDialogComponent } from './shared/alert-dialog/alert-dialog.component';
import { tap } from 'rxjs';

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

export class AppComponent implements OnInit {
  icon = 'menu';
  currentRoute = '';

  signInMsg = '';
  successLogin = false;
  sessionData!: IUserSession;
  sessionData$;

  loggedin$;

  constructor(
    private router: Router,
    private route: ActivatedRoute,    
    private SigninProvider: SignInService,
    private SignupProvider: SignUpService 
  ) {
    this.loggedin$ = this.SigninProvider.signedin$;
    this.sessionData$ = this.SigninProvider.sessionData$;
    this.router.navigate(['signup']);
  }

  ngOnInit() {
    this.sessionData$
     .pipe( tap(res => { this.sessionData = res; 
      this.signInMsg = `Bem vindo ${this.sessionData.uid}`;
     }))
     .subscribe();
         
  }

  navigateTo(subroute: string): void {
    this.currentRoute === 'home' ? this.icon = 'arrow_back' : this.icon = 'menu'; 
    this.currentRoute === 'home' ? this.currentRoute = `tab/${subroute}` 
     : this.currentRoute = 'home';
    this.router.navigate([this.currentRoute]);
    
  }

  alertSuccessLogin(){
    setTimeout(() => { this.successLogin = true }, 4000);
    this.router.navigate(['/home']);
     
  }

}
