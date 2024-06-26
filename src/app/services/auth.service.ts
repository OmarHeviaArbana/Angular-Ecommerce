import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Login } from '../login/login.model';
import { User } from '../register/user.model';
import { AuthStoreService } from './auth-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private authStoreService: AuthStoreService) {}
    authLogin(login: Login): Observable<Login> {
      return this.http.post<Login>('http://localhost:3000/api/user/login', login).pipe(
        tap((response: any) => {
          if(response && response.token) {
            this.authStoreService.setToken(response.token);
          }
        })
      );;
    }
    authRegister(user: User): Observable<User> {
      return this.http.post<User>('http://localhost:3000/api/user/register', user);
    }

}
