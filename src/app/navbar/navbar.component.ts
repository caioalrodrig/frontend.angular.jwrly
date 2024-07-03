import { Component } from '@angular/core';
import { NavbarService } from './navbar-list.service';
import { CommonModule } from '@angular/common';  
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ CommonModule, MatTabsModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  providers: [NavbarService]
})
export class NavbarComponent {
  nomePortal = "Portfolio!blog";
  social: string[] = ['Linkedin','Github','Instagram'];
   
  constructor( private socialList: NavbarService) {}

}
