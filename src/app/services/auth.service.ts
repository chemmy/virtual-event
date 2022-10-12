import { Injectable } from '@angular/core';
import { OccamlabApiService } from './occamlab-api.service';
import { lastValueFrom } from 'rxjs';
import { AUTH_STORAGE_KEY } from '../constants/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private occamlabApi: OccamlabApiService) { }

  async updateAccessToken(): Promise<string> {
    localStorage.clear();

    const auth$ = this.occamlabApi.login2();
    const data = await lastValueFrom(auth$);
    const { auth_token } = data;
    console.log('updateAccessToken', data);
    localStorage.setItem(AUTH_STORAGE_KEY, auth_token);
    return auth_token;
  }

  async getAccessToken(): Promise<string> {
    const accessToken = localStorage.getItem(AUTH_STORAGE_KEY);
    console.log('getAccessToken localStorage', accessToken);
    if (accessToken) return accessToken;
    return await this.updateAccessToken();
  }
}
