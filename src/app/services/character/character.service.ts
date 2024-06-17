import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { AppConfig } from '../../utils/app.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../../interface/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private store: Store<AppState>,
    private http: HttpClient,
  ) {}

  getCharactersListByUserId(userId: string): Observable<any> {
    return this.http.get(`${AppConfig.baseUrl}/character/get-by-user/${userId}`);
  }

  saveCharacter(body: Character, userId: string, charId?: string): Observable<any> {
    if (charId) {
      return this.http.put(`${AppConfig.baseUrl}/character/put/${charId}`, body);
    }

    return this.http.post(`${AppConfig.baseUrl}/character/add/${userId}`, body);
  }

  getCharacterById(charId: string): Observable<any> {
    return this.http.get(`${AppConfig.baseUrl}/character/get-by-character/${charId}`);
  }

  deleteCharacter(charId: string): Observable<any> {
    return this.http.delete(`${AppConfig.baseUrl}/character/delete/${charId}`);
  }
}
