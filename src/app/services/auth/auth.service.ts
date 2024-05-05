import { EventEmitter, Injectable } from '@angular/core';
import { AppConfig } from '../../utils/app.config';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { SetUser } from '../../store/user/user.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userReady: EventEmitter<boolean>;

  userRedirect: EventEmitter<boolean>;

  constructor(
    private http: HttpClient,
    private helper: JwtHelperService,
    private store: Store<AppState>,
  ) {
    this.userReady = new EventEmitter();
    this.userRedirect = new EventEmitter(true);
  }

  login(credentials: any) {
    const { baseUrl } = AppConfig;

    return this.http.post(`${baseUrl}/login`, credentials).pipe(
      map((response: any) => {
        const result = response;
        if (result && result.token) {
          localStorage.setItem('token', result.token);
          localStorage.setItem('userInfo', `{"id": "${result.user.id}", "email": "${result.user.email}", "name": "${result.user.displayName}"}`);
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

    // if (localStorage) {
    //   const token = localStorage.getItem('token');

    //   if (token) {
    //     this.userRedirect.emit(true);
    //     return true;
    //   } else {
    //     this.userReady.emit(true);
    //     return false;
    //   }
    // } else {
    //   return true;
    // }
  }

  isTokenValid() {
    const { baseUrl } = AppConfig;
    const token = localStorage.getItem('token');

    if (token) {
      this.http.get(`${baseUrl}/validate-token/${token}`).subscribe({
        next: (res: any) => {
          return res.success;
        }
      });
    }

    return false;
  }

  async currentUser() {
    const token = localStorage.getItem('token');
    if (!token) return null;

    const userStorage = localStorage.getItem('userInfo');
    if (userStorage) {
      const user = JSON.parse(userStorage);
      this.store.dispatch(new SetUser(user));
      return user;
    }

    return null;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    this.userReady.emit(false);
  }
}
