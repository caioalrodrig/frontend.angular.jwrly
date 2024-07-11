import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ AppComponent, MatIconModule, 
    CommonModule, RouterOutlet, MatButtonModule,
    MatToolbarModule, MatSelectModule],
  exportAs: "backend",
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent{
  icon = 'menu';
  nomePortal = "Portfolio!blog";
  toggleRoute = '';
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,     
  ){ }

  getForm(submiText: HTMLInputElement){
    console.log(submiText.value);
  }

  navigateTo() {
    
    if( this.toggleRoute === ''){
      this.icon = 'arrow_back';
      this.toggleRoute = 'tab/search';
    } else{
      this.icon = 'menu';
      this.toggleRoute = '';
    }
    this.router.navigate([this.toggleRoute]);
  }

}
