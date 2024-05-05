import { EventEmitter, Injectable } from '@angular/core';
import { AppConfig } from '../../utils/app.config';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { user } from '../../store/user/user.selectors';

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

  async currentUser() {
    const token = localStorage.getItem('token');
    if (!token) return null;

    this.store.select(user).subscribe({
      next: (currentUser) => {
        return currentUser;
      }
    });

    return null;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.userReady.emit(false);
  }
}
