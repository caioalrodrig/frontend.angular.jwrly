import { environment } from '../../environments/environment.development';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, Subject, take, tap } from 'rxjs';
import { TRelogiosPaginated } from './relogio.interface';

@Injectable({
  providedIn: 'root'
})
export class RelogioService {
  readonly apiUrl = `${environment.API_URL}/relogios`;

  public relogiosResponse$ = new BehaviorSubject<TRelogiosPaginated>([[[]]]);

  public successRes$ = new Subject<boolean>();

  public count$ = new BehaviorSubject<number>(0);

  constructor( private http: HttpClient ) { }

  getRelogiosData(paramsObject: {[key: string]: any}){
   
    this.http.get<any>(this.apiUrl, {
      params: new HttpParams()
       .set('page', paramsObject['page'])      
       .set('limit', paramsObject['limit']),
    })
    .pipe(
      tap(res => this.count$.next(res.count)),
      map(res => {
        return res.entries.map((item: any) => {
          return Object.entries(item).map(entry => [entry[0], entry[1] as string]);
        })
      }),
      take(1),
    )
    .subscribe({
      next: (res) => {
        this.relogiosResponse$.next(res);
        this.successRes$.next(true);
      },
      error: (error) => {
        console.error(`Erro ao buscar dados: ${error}`);
        this.successRes$.next(false);
        this.count$.next(0);
      }
    });
  }

}
