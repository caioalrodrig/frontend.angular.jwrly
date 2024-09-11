import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILikeRelogios } from './wish-list.interface';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  readonly apiUrl = `${environment.API_URL}/pessoas`;

  constructor( private http: HttpClient ) { }

  likeRelogio(params: ILikeRelogios){
    return this.http.post<any>(this.apiUrl, {}, { params: this.setparams(params) })
  }

  unlikeRelogio(params: ILikeRelogios){
    return this.http.delete<any>(this.apiUrl, { params: this.setparams(params) })
  }

  setparams(params: ILikeRelogios){
    return new HttpParams()
    .set('userId', params.userId)
    .set('watchId', params.watchId);
  }
}
