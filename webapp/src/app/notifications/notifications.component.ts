import { Component, OnInit } from '@angular/core';
import { BloodService } from '../blood.service';
import { AuthenticationService } from '../User/authentication.service';
import { BloodNotification } from '../BloodNotification';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  bloodNotifications: BloodNotification[] = [];
  notificationStatus: boolean = false;
  noNotifications: boolean = false;
  constructor(private bloodService: BloodService, private authService: AuthenticationService, private route: ActivatedRoute) { }

  ngOnInit() {
    const value = this.route.snapshot.paramMap.get("value");
    if (this.authService.getLoggedinUser() != 'admin' && this.authService.getLoggedinUser() != null) {
      this.bloodService.getNotification(this.authService.getLoggedinUser()).subscribe((response) => { this.bloodNotifications = response; console.log(this.bloodNotifications) });
    }
    if (value == 'true') {
      this.bloodService.updateNotification(this.authService.getLoggedinUser()).subscribe((response) => { });
    }
    console.log(value);
  }
  removeNotifications(id) {
    return this.bloodService.removeNotifications(id).subscribe((response) => {

      this.bloodService.getNotification(this.authService.getLoggedinUser()).subscribe((response) => { this.bloodNotifications = response });
    })
  }
  isEmpty() {

    if (this.bloodNotifications.length > 0) {
      this.noNotifications = false;
    } else {
      this.noNotifications = true;
    }
    return this.noNotifications;
  }

}
