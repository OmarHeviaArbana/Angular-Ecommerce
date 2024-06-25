import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Login } from '../login/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}
    auth(login: Login): Observable<Login> {
      return this.http.post<Login>('http://localhost:3000/api/user/login', login);
    }

}
