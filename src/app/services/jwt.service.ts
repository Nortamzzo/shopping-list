import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private httpClient: HttpClient) { }

  appHost = "http://192.168.1.10:9525";

  login(email: string, password: string) {
    return.this.httpClient.post<{ access_token: string }>('apphost ' + '/auth/login', { email, password }).pipe(tap(res => {
      localStorage.setItem('access_token', res.access_token);
    }))
  }

  register(email: string, password: string) {
    return this.httpClient.post<{ access_token: string }>(appHost + '/register', { email, password }).pipe(tap(res => {
      this.login(email, password)
    }))
  }
}
