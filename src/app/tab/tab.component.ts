import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TabFormComponent } from './tab-form/tab-form.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [ RouterOutlet, CommonModule, TabFormComponent ],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss'
})
export class TabComponent {
  constructor( ) { }

}
