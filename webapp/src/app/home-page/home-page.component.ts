import { Component, OnInit } from '@angular/core';
import { BloodService } from '../blood.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../User/authentication.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  bloodRequirement: any;
  bloodNotifications: any;
  dataLoaded: Promise<boolean>;
  notificationStatus: boolean = false;
  notificationAdded: boolean = false;
  requirementIsThere: boolean = false;
  constructor(private router: Router, private bloodService: BloodService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.bloodService.viewAllRequirements().subscribe(
      (response) => {
        console.log(response);
        this.bloodRequirement = response;
        var count = Object.keys(this.bloodRequirement).length;
        if (count != 0) {
          this.requirementIsThere = true;
        }
        this.dataLoaded = Promise.resolve(true);

      }
    )

    if (this.authService.getLoggedinUser() != 'admin' && this.authService.getLoggedinUser() != null) {
      this.bloodService.getNotification(this.authService.getLoggedinUser()).subscribe((response) => {
        this.bloodNotifications = response; console.log(this.bloodNotifications);
        for (let notification of this.bloodNotifications) {
          if (notification.status == false) {
            this.notificationStatus = true;
          }
        }


      });
    }
    if (this.authService.getLoggedinUser() != 'admin' && this.authService.getLoggedinUser() != null) {
      this.bloodService.postBloodDonationNotification(this.authService.getLoggedinUser()).subscribe((response) => {
        this.bloodService.getNotification(this.authService.getLoggedinUser()).subscribe((response) => {
          this.bloodNotifications = response; console.log(this.bloodNotifications);
          for (let notification of this.bloodNotifications) {
            if (notification.status == false) {
              this.notificationStatus = true;
            }
          }


        });
      })
    }

  }

  isLogin() {
    return this.authService.isLogin();
  }
  getUsername() {
    return this.authService.getLoggedinUser();
  }


}
