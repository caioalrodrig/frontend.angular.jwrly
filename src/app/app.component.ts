import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SignInService } from './signin/signin.service';
import { SignInComponent } from './signin/signin.component';
import { AlertDialogComponent } from './shared/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppComponent, SignInComponent,
    AlertDialogComponent, MatIconModule,
    CommonModule, RouterOutlet, MatButtonModule,
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,    
    private SigninProvider: SignInService 
  ) {
    this.loggedin$ = this.SigninProvider.signedin$;
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
    console.log(this.SigninProvider.bearerToken);
    console.log(this.SigninProvider.userId);

  }

  alertSuccessLogin(){
    setTimeout(() =>{
      this.successLogin = false;
    }, 5000);
  }
}
