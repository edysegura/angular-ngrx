import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class UserService {
  usersEndpoint = '';

  constructor(private http: HttpClient) {}

  getUsers() {

  }
}
