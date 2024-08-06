import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, JsonPipe } from '@angular/common';
import { TabFormService } from './tab-form.service';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-tab-detalhe',
  standalone: true,
  imports: [ JsonPipe, MatCardModule, MatChipsModule,
    CommonModule, ReactiveFormsModule,
    MatProgressBarModule, MatSelectModule,
    MatInputModule
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tab-form.component.html',
  styleUrl: './tab-form.component.scss'
})

export class TabFormComponent implements OnInit{
  dataRes: string[][] = [[]];
  submitStatus = '';

  constructor(
    private relogiosGet: TabFormService,
  ){ }

  ngOnInit() {
    this.relogiosGet.getData().subscribe({
      next: (response) => {
        const first = response[0]; 
        this.dataRes = Object.entries(first);
        this.dataRes.splice(0, 1);
      },
      error: (error) => {
        console.error(`Erro ao buscar dados ${error}`);
      }
    });
  }
  
}
