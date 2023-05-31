import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}
  baseUrl = 'http://localhost:8080/user';
  addUser(name: string): Observable<User> {
    return this.http.post<User>(this.baseUrl, { name });
  }
  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }
}
