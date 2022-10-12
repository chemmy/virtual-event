import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, map, mergeMap } from 'rxjs';
import { Authentication, ProfileImage } from '../types/User';
import { IMAGE_UPLOAD_TYPE } from '../constants/image';
import { AUTH_STORAGE_KEY } from '../constants/auth';

@Injectable({
  providedIn: 'root'
})
export class OccamlabApiService {
  private baseUrl = 'https://api.occamlab.com.sg/demo-occamlab';
  private loginEmail = 'sample-user@test.com';
  private loginPassword = 'sample-password'; // TODO: change to env?

  constructor(private http: HttpClient) { }

  login(): Observable<Authentication> {
    const url = `${this.baseUrl}/login-test`;
    const data = { email: this.loginEmail, password: this.loginPassword };
    return this.http.post<Authentication>(url, data);
  }

  getAccessToken(): Observable<string> {
    return this.login().pipe(map((auth) => auth.auth_token));
  }
  
  uploadImage(file: File): Observable<ProfileImage> {
    return this.getAccessToken().pipe(mergeMap((token) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${token}`,
          'Content-Type': IMAGE_UPLOAD_TYPE
        })
      };
      const url = `${this.baseUrl}/upload-test`;
      return this.http.post<ProfileImage>(url, file, httpOptions);
    }));
  }
}
