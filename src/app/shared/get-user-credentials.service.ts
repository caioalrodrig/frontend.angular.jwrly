import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetUserCredentialsService {

  constructor() { }

  getCredentials(){
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const storedData = window.sessionStorage.getItem('userInfo');
      if (storedData) return JSON.parse(storedData);
    }
    return null;
  }
}
