import { Component, OnInit, Input } from '@angular/core';
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
import { ActivatedRoute, Router } from '@angular/router';

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
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ){
    this.formulario = this.formBuilder.group({
      model: [null],
      brand: [null],
      price: [null]
    });
  }
  
  onSubmit() {  
    const { model, brand, price } = this.formulario.controls;
    
    const [ priceMin, priceMax ] = price.value ? price.value.split('&') : [null, null];
    
    this.router.navigate(['relogios'], {
      queryParams: {
        model: model.value,
        brand: brand.value,
        priceMin: priceMin ? priceMin : 1,
        priceMax: priceMax ? priceMax : 99999,
        page: 1
      }
    });
  }

  onFieldSelection(fieldValue: string){
        
    this.router.navigate(['relogios'], {
      queryParams: {
        title: fieldValue,
        page: 1
      }
    });    
  }
}
