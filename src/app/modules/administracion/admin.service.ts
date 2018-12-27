import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { retry, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface Users {
  id: string;
  value: string;
  active: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http: HttpClient
  ) { }

  listUsers(): Observable<Users[]> {
    return this.http
    .get<any>(environment.endpoint.users)
      .pipe(
        map((response => response.list as Users[]))
      );
  }

  createUser(user): Observable<User> {
    return this.http
    .post<User>(environment.endpoint.user, user)
    .pipe(
      retry(2)
    );
  }
}

export interface User {
  nombre: string;
  email: string;
  password: string;
  group: string;
}

