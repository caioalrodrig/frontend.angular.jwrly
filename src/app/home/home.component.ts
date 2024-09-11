import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from "../shared/search-bar/search-bar.component";
import { MatCard } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SearchBarComponent,
    MatCard],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  constructor(
    private router: Router
  ){}

  onFieldSelection(fieldValue: string){
          
    this.router.navigate(['relogios'], {
      queryParams: {
        title: fieldValue,
        page: 1
      }
    });    
  }

}
