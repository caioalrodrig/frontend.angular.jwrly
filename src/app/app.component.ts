import { AfterViewInit, Component, Directive, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule, MatButtonModule, MatSelectModule],
  exportAs: "backend",
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent{
  title = 'jewelAPI';
  nomePortal = 'Caio\'s';

  getForm(submiText: HTMLInputElement){
    console.log(submiText.value);
  }
}
