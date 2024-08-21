import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {PageEvent, MatPaginatorModule} from '@angular/material/paginator';
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
    MatInputModule, MatPaginatorModule
  ],
  templateUrl: './relogio.component.html',
  styleUrl: './relogio.component.scss'
})

export class RelogioComponent implements OnInit{
  enablePaginator$;
  relogiosCount$
  dataRes$;

  dataRes: string[][] = [[]];
  readonly ITEMS_PER_PAGE = 2;
  pageIdx = 0;

  constructor(
    private RelogiosProvider: RelogioService,
  ){ 
    this.dataRes$ = this.RelogiosProvider.relogiosResponse$;
    this.enablePaginator$ = this.RelogiosProvider.successRes$;
    this.relogiosCount$ = this.RelogiosProvider.count$;
  }

  ngOnInit() { 
    if(this.relogiosCount$.getValue() == 0){ 
      this.getRelogios();
    }
  }

  getRelogios(){
    this.RelogiosProvider.getRelogiosData({ 
      page: this.pageIdx + 1, 
      limit: this.ITEMS_PER_PAGE 
    });
  }

  getCardTitle(cardRelogio: TRelogioCardData){
    return cardRelogio.filter((_, idx) => idx === 1 || idx === 2 || idx === 4) 
     .map(row => row[1])
     .join(" ");
  }

  handlePageChange(e: PageEvent){
    this.pageIdx = e.pageIndex;
    this.getRelogios();
  }
  
}
