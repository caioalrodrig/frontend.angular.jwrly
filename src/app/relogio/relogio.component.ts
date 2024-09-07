import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PageEvent, MatPaginatorModule } from '@angular/material/paginator';
import { MatIcon } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarAction, MatSnackBarActions, 
  MatSnackBarLabel,  MatSnackBarRef,} from '@angular/material/snack-bar';
import { TRelogioCardData } from './relogio.interface';
import { AlertDialogComponent } from '../shared/alert-dialog/alert-dialog.component';
import { RelogioService } from './relogio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, catchError, map, take, tap } from 'rxjs';
import { TRelogiosPaginated } from './relogio.interface';
import { MatButtonModule } from '@angular/material/button';
import { WishListService } from '../shared/wish-list/wish-list.service';
import { GetUserCredentialsService } from '../shared/get-user-credentials.service';
import { SnackbarComponent } from '../shared/snackbar/snackbar.component';

@Component({
  selector: 'app-relogio',
  standalone: true,
  imports: [ JsonPipe, MatCardModule, MatChipsModule,
    CommonModule, ReactiveFormsModule,
    MatProgressBarModule, MatSelectModule,
    MatInputModule, MatPaginatorModule,
    AlertDialogComponent, MatIcon, MatButtonModule
  ],
  templateUrl: './relogio.component.html',
  styleUrl: './relogio.component.scss'
})    

export class RelogioComponent implements OnInit{
  private _snackBar = inject(MatSnackBar);

  readonly snackbarDurationInSecs = 5;

  readonly cardAttributesPTBR = ['','Modelo', 'Marca', 'Preço', 'Pulseira', 'Case'];

  relogiosResponse$ = new BehaviorSubject<TRelogiosPaginated>([[]]);

  count$;

  readonly ITEMS_PER_PAGE = 2;
  pageIdx = 1;

  constructor(
    private credentialsProvider: GetUserCredentialsService,
    private RelogiosProvider: RelogioService,
    private wishListProvider: WishListService,
    private route: ActivatedRoute,
    private router: Router
  ){
    this.count$ = this.RelogiosProvider.count$;
   }

  ngOnInit() {     
    this.route.queryParams
     .pipe(
      tap(params => {  Object.entries(params).length > 0 ? 
        params : this.router.navigate(['tab/search']) }),
      tap(params => this.pageIdx = Number(params['page']) ),
      map(params => { return {...params, limit: this.ITEMS_PER_PAGE} }))
     .subscribe(params => {   
      this.RelogiosProvider.getRelogiosData(params)
       .pipe(
        catchError(error => this.router.navigate(['/not-found'])), 
        take(1))
       .subscribe({
        next: (res) => {
          this.relogiosResponse$.next(res);
        },
        error: (error) => {
          console.error(`Erro ao buscar dados: ${error}`);
          this.count$.next(-1);
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

  getResultsNotFound(){
    setTimeout(() => { this.router.navigate(['tab/search']) }, 2000);

  }

  likeRelogio(relogioId: string){
    const { userId } = this.credentialsProvider.getCredentials();
    this.wishListProvider.likeRelogio({ userId: userId,
      watchId: Number(relogioId)
    })
    .subscribe({ next: (res) => { this.openSnackBar({
      message: 'Item adicionado a wishlist!',
      icon: '🞫'
    })}, error: (error) => { this.openSnackBar({
      message: 'Esse item já está em sua wishlist',
      icon: '🞫'
    })}  }); 

  }

  openSnackBar(config: Record<string, any>) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: this.snackbarDurationInSecs * 1000, data : {
        message: config['message'],
        icon: config['icon']
      }
    });
  }
}
