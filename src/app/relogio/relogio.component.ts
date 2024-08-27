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
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, catchError, filter, map, Observable, of, Subject, take, tap } from 'rxjs';
import { TRelogiosPaginated } from './relogio.interface';

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
  relogiosResponse$ = new BehaviorSubject<TRelogiosPaginated>([[[]]]);

  successRes$ = new Subject<boolean>();

  count$ = new BehaviorSubject<number>(0);

  dataRes: string[][] = [[]];
  readonly ITEMS_PER_PAGE = 2;
  pageIdx = 1;

  constructor(
    private RelogiosProvider: RelogioService,
    private route: ActivatedRoute,
    private router: Router
  ){
    this.count$ = RelogiosProvider.count$;
  }

  ngOnInit() {     
    this.route.queryParams
     .pipe(
      tap(params => this.pageIdx = Number(params['page']) ),
      map(params => {
        let newParams = {... params};
        newParams['limit'] = this.ITEMS_PER_PAGE;
        return newParams;
      }),
     )
     .subscribe(params => {   
      this.RelogiosProvider.getRelogiosData(params)
       .subscribe({
        next: (res) => {
          this.relogiosResponse$.next(res);
          this.successRes$.next(true);
        },
        error: (error) => {
          console.error(`Erro ao buscar dados: ${error}`);
          this.successRes$.next(false);
          this.count$.next(0);
        }});
    });
  }

  getCardTitle(cardRelogio: TRelogioCardData){
    return cardRelogio
     .filter((_, idx) => idx === 1 || idx === 2 || idx === 4 ) 
     .map(row => row[1])
     .join(" ");
  }

  handlePageChange(e: PageEvent){
    this.router.navigate([], {
      relativeTo: this.route, 
      queryParams: { page: e.pageIndex + 1 }, 
      queryParamsHandling: 'merge', 
    
    });
  }
}
