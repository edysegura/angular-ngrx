import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Users } from '../models/user.model';

@Injectable()
export class UserService {
  private usersEndpoint = `${environment.apiBaseUrl}/users.json`;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Users> {
    return this.http.get<Users>(this.usersEndpoint);
  }
}
