import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from "../shared/search-bar/search-bar.component";
import { SearchBarService } from '../shared/search-bar/search-bar.service';
import { MatCard } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SearchBarComponent,
    MatCard, MatExpansionModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  constructor(
    private router: Router
  ){}


}
