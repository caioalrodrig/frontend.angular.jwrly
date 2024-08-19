import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TRelogioCardData } from './relogio.interface';
import { RelogioService } from './relogio.service';

@Component({
  selector: 'app-relogio',
  standalone: true,
  imports: [ JsonPipe, MatCardModule, MatChipsModule,
    CommonModule, ReactiveFormsModule,
    MatProgressBarModule, MatSelectModule,
    MatInputModule
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './relogio.component.html',
  styleUrl: './relogio.component.scss'
})

export class RelogioComponent implements OnInit{
  dataRes: string[][] = [[]];
  dataRes$;
  submitStatus = '';

  constructor(
    private relogiosGet: RelogioService,
  ){ 
    this.dataRes$ = this.relogiosGet.relogiosResponse$;
  }

  ngOnInit() {
    this.relogiosGet.getRelogiosData(this.setPaginator());
  }

  setPaginator(){
    return {
      page: 2,
      limit: 2
    };
  }

  getCardTitle(cardRelogio: TRelogioCardData){
    return cardRelogio.filter((_, idx) => idx === 1 || idx === 2 || idx === 4) 
     .map(row => row[1])
     .join(" ");
  }
  
}
