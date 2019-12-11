import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../User/authentication.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  isLogin() {
    if (this.authService.isLogin()) {
      return true;
    }
    else {
      return false;
    }
  }
  getUserName() {
    return this.authService.getLoggedinUser()
  }

}
