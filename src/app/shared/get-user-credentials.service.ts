import { Injectable } from '@angular/core';
import { IUserSession } from '../shared/user-session.interface';

@Injectable({
  providedIn: 'root'
})
export class GetUserCredentialsService {

  constructor() { }

  getCredentials(): IUserSession{
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const storedData = window.sessionStorage.getItem('userInfo');
      if (storedData) return JSON.parse(storedData);
    }
    return {bearer: '', name: '', uid: 0};
  }
}
