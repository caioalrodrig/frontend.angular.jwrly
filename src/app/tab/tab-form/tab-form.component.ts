import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormField } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { SearchBarComponent } from '../../shared/search-bar/search-bar.component';

@Component({
  selector: 'app-tab-detalhe',
  standalone: true,
  imports: [ MatCardModule, MatChipsModule,
    CommonModule, ReactiveFormsModule,
    MatProgressBarModule, MatSelectModule,
    MatInputModule, MatFormField, MatButtonModule,
    MatRadioModule, SearchBarComponent
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tab-form.component.html',
  styleUrl: './tab-form.component.scss'
})

export class TabFormComponent{
  formulario: FormGroup;


  constructor(
    private formBuilder: FormBuilder
  ){
    this.formulario = this.formBuilder.group({
      model: [null],
      brand: [null],
      price: [null]
    });
  }
  
  onSubmit(){
    console.log(this.formulario.controls);
  }
}
