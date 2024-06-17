import { EventEmitter, Inject, Injectable } from '@angular/core';
import { AppConfig } from '../../utils/app.config';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { SetUser } from '../../store/user/user.actions';
import { DOCUMENT } from '@angular/common';

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
    @Inject(DOCUMENT) private document: Document
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

  isLoggedIn(): boolean {
    // const token = localStorage.getItem('token');

    // if (token) {
    //   // this.isTokenValid().subscribe({
    //   //   next: (res) => true,
    //   //   error: (err) => {
    //   //     console.error('Não está autenticado: \n', err);
    //   //     return false;
    //   //   },
    //   // });

    //   return true;
    // }

    // return false;

    return true;
  }

  isTokenValid(): Observable<any> {
    const { baseUrl } = AppConfig;
    const token = localStorage.getItem('token');

    return this.http.get(`${baseUrl}/validate-token/${token}`);
  }

  async currentUser() {
    const localStorage = this.document?.defaultView?.localStorage;

    if (localStorage) {
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
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    this.userReady.emit(false);
  }
}
