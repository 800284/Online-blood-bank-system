import { Injectable } from '@angular/core';
import { User } from './User';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private authService: AuthenticationService) { }

  addUser(user: User) {
    let url = environment.baseUrl + "/authentication-service/blood-bank/users";
    return this.httpClient.post<any>(url, user);
  }
}
