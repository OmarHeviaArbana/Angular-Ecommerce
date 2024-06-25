import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Login } from '../login/login.model';
import { User } from '../register/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}
    authLogin(login: Login): Observable<Login> {
      return this.http.post<Login>('http://localhost:3000/api/user/login', login);
    }
    authRegister(user: User): Observable<User> {
      return this.http.post<User>('http://localhost:3000/api/user/register', user);
    }

}
