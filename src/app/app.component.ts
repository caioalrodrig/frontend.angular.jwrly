import { Component } from '@angular/core';
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

export class AppComponent {
  icon = 'menu';
  currentRoute = '';
  successLogin = true;
  isOnSignupView = true;
  loggedin$;

  constructor(
    private router: Router,
    private route: ActivatedRoute,    
    private SigninProvider: SignInService,
    private SignupProvider: SignUpService 
  ) {
    this.loggedin$ = this.SigninProvider.signedin$;
  }

  navigateTo(subroute: string): void {
    this.currentRoute === 'home' ? this.icon = 'arrow_back' : this.icon = 'menu'; 
    this.currentRoute === 'home' ? this.currentRoute = `tab/${subroute}` 
     : this.currentRoute = 'home';
    this.router.navigate([this.currentRoute]);
    
  }

  alertSuccessLogin(){
    setTimeout(() => { this.successLogin = false }, 4000);
    this.router.navigate(['/home']);
  }

  setLoginView() {
    this.isOnSignupView = !this.isOnSignupView;
  }
}
