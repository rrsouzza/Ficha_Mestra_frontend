import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../../utils/app.config';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient
  ) {}

  createUser(newUserInfo: { name: string; email: string; password: string; }) {
    const { baseUrl } = AppConfig;

    return this.http.post(`${baseUrl}/signup`, newUserInfo);
  }
}
