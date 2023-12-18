import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environment';
import { ApiEndpoints } from 'src/enums/api-endpoints.enum';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getNewestStories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}${ApiEndpoints.NewestStories}`);
  }
}
