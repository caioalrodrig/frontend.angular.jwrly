import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, JsonPipe } from '@angular/common';
import { TabFormService } from './tab-form.service';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-tab-detalhe',
  standalone: true,
  imports: [ JsonPipe, MatCardModule, MatChipsModule,
    CommonModule, ReactiveFormsModule,
    MatProgressBarModule, MatSelectModule,
    MatFormFieldModule, MatInputModule, MatButtonModule, 
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tab-form.component.html',
  styleUrl: './tab-form.component.scss'
})

export class TabFormComponent implements OnInit{
  dataRes: string[][] = [[]];
  formulario: FormGroup;
  submitDebug = '';
  constructor(
    private relogios: TabFormService,
    private formBuilder: FormBuilder,
  
  ){
    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null]
    });
  }

  ngOnInit() {
    this.relogios.getData().subscribe({
      next: (response) => {
        this.dataRes = Object.entries(response);
        this.dataRes.splice(0, 1);
      },
      error: (error) => {
        console.error(`Erro ao buscar dados ${error}`);
      }
    });
  }

  onSubmit(){
    this.submitDebug = 'Hello'
  }

}
