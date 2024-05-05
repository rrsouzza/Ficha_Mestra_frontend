import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { userId } from '../../store/user/user.selectors';
import { AppConfig } from '../../utils/app.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private store: Store<AppState>,
    private http: HttpClient,
  ) {}

  getCharactersListByUserId(): Observable<any> {
    const { baseUrl } = AppConfig;
    let usrId = '';

    this.store.select(userId).subscribe({
      next: (id) => {
        usrId = id;
      },
    });

    return this.http.get(`${baseUrl}/character/get-by-user/${usrId}`);
  }
}
