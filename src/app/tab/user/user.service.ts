import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { catchError, map, of, Subject, take, tap } from 'rxjs';
import { TRelogiosSessionData } from '../../shared/session.interface';
import { GetUserCredentialsService } from '../../shared/get-session-data.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly apiUrl = `${environment.API_URL}/pessoas`;
  
  public relogioTitles$ = new Subject<string[]>(); 

  constructor(
    private http: HttpClient,
    private SessionDataProvider: GetUserCredentialsService,
  ) { }

  getLikedTitleWatches(params: Record<string,any>){
    return this.http.get<TRelogiosSessionData>(this.apiUrl, { params: params })
      .pipe(
        catchError(error => { return of(['']) }),
        tap(res => { if (typeof window !== 'undefined' && window.sessionStorage)
          sessionStorage.setItem('userLikedWatches', JSON.stringify(res)); }),
        tap(res => console.log(res)),
        map(res => res.map((item: any) => item.title)),
        take(1)
      );
  }

}

