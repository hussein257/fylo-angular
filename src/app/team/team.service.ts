import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private apiUrl = 'https://api.api-ninjas.com/v1/exercises?muscle=biceps';

  constructor(private http: HttpClient) {}

  fetchDataFromApi(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}

