import { Injectable } from '@angular/core';
import { IUserSession } from './session.interface';
import { TRelogiosSessionData } from './session.interface';

@Injectable({
  providedIn: 'root'
})
export class GetUserCredentialsService {

  constructor() { }

  getCredentials(sessionItem: string): IUserSession | TRelogiosSessionData{
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const storedData = window.sessionStorage.getItem(sessionItem);
      if (storedData) return JSON.parse(storedData);
    }
    return sessionItem === 'userInfo' ? {bearer: '', name: '', userId: 0} :
      [['null', 'null']];
  }
}
