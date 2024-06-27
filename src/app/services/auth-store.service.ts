import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthStoreService {

  constructor() { }

  setToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  getToken(): string | null {
   return localStorage.getItem('authToken');
  }

  isAuth(): boolean {
    return this.getToken() !== null;
  }

  logOut(): void {
    localStorage.removeItem('authToken');
  }
}


