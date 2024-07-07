import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ AppComponent, MatTabsModule, 
    CommonModule, RouterOutlet, MatButtonModule, MatSelectModule],
  exportAs: "backend",
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent{
  title = 'jewelAPI';
  nomePortal = "Portfolio!blog";
  
  constructor(
    private router: Router,
    private route: ActivatedRoute 
  ){ }

  getForm(submiText: HTMLInputElement){
    console.log(submiText.value);
  }

  navigateTo(route: string) {
    route = route.toLowerCase();
    this.router.navigate([route]);
  }

}
