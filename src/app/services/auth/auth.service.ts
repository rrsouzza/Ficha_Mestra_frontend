import { EventEmitter, Injectable } from '@angular/core';
import { AppConfig } from '../../utils/app.config';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userReady: EventEmitter<boolean>;

  userRedirect: EventEmitter<boolean>;

  constructor(
    private http: HttpClient,
    private helper: JwtHelperService
  ) {
    this.userReady = new EventEmitter();
    this.userRedirect = new EventEmitter(true);
  }

  login(credentials: any) {
    const { baseUrl } = AppConfig;

    return this.http.post(`${baseUrl}/auth/local`, credentials).pipe(
      map((response: any) => {
        const result = response;
        if (result && result.token) {
          localStorage.setItem('token', result.token);
          this.userReady.emit(true);
          return result;
        }
        return result;
      }),
    );
  }

  isLoggedIn() {
    const isTokenValid = !this.helper.isTokenExpired();

    if (!isTokenValid) {
      this.userRedirect.emit(true);
    } else {
      this.userReady.emit(true);
    }
    return isTokenValid;
  }

  get currentUser() {
    const token = localStorage.getItem('token');
    if (!token) return null;
    const user = this.helper.decodeToken(token);
    return user;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('filtroLista');
    localStorage.removeItem('filtroViagens');
    localStorage.removeItem('filtroEventos');
    this.userReady.emit(false);
  }
}
