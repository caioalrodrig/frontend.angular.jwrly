import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SignInService } from './signin/signin.service';
import { SignInComponent } from './signin/signin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppComponent, SignInComponent, MatIconModule,
    CommonModule, RouterOutlet, MatButtonModule,
    MatToolbarModule, MatSelectModule],
  exportAs: "backend",
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  icon = 'menu';
  currentRoute = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,    
    private loginService: SignInService 
  ) {}

  getForm(submiText: HTMLInputElement){
    console.log(submiText.value);
  }

  navigateTo(subroute: string) {
    this.currentRoute === '' ? this.icon = 'arrow_back' : this.icon = 'menu'; 
    this.currentRoute === '' ? this.currentRoute = `tab/${subroute}` 
     : this.currentRoute = '';
    this.router.navigate([this.currentRoute]);
    console.log(this.loginService.bearerToken);
    console.log(this.loginService.userId);

  }

}
