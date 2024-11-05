import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl =
    'https://api.api-ninjas.com/v1/exercises?muscle=biceps';
  private apiKey = 'J28VOBvRkgP/Gg1K76zDGQ==4sCrkEaDL6FkQYmZ';
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    const headers = new HttpHeaders({
      'X-api-key': this.apiKey,
    });
    return this.http.get(this.apiUrl, { headers });
  }
}



