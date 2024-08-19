import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-tab-detalhe',
  standalone: true,
  imports: [ MatCardModule, MatChipsModule,
    CommonModule, ReactiveFormsModule,
    MatProgressBarModule, MatSelectModule,
    MatInputModule
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tab-form.component.html',
  styleUrl: './tab-form.component.scss'
})

export class TabFormComponent{

  
}
