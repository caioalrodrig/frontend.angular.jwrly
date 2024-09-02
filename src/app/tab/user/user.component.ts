import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ CommonModule, MatFormFieldModule, 
    MatButtonModule, ReactiveFormsModule,
    MatInputModule, MatExpansionModule, MatIcon],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  sessionData: [string, any][] = []; 

  constructor() {}

  ngOnInit() {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const storedData = window.sessionStorage.getItem('userInfo');
      this.sessionData = storedData ? Object.entries(JSON.parse(storedData)) : [];
    }
  }
}
