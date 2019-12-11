import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../User/authentication.service';
import { Router } from '@angular/router';
import { BloodService } from '../blood.service';
import { BloodNotification } from '../BloodNotification';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  bloodNotifications: BloodNotification[];
  notificationStatus: boolean = false;
  constructor(private router: Router, private authService: AuthenticationService, private bloodService: BloodService) { }

  ngOnInit() {
    if (this.authService.getLoggedinUser() != 'admin' && this.authService.getLoggedinUser() != null) {
      this.bloodService.getNotification(this.authService.getLoggedinUser()).subscribe((response) => { this.bloodNotifications = response; console.log(this.bloodNotifications) });
    }

  }

  logoutUser() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
  isLoggedIn() {
    return this.authService.isLogin()
  }

  getUserName() {
    return this.authService.getLoggedinUser()
  }
  showTips() {
    this.router.navigate(['/tips']);
  }
  viewQuestions(username) {
    this.router.navigate(['/view-questions']);
  }
}
