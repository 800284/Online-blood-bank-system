import { Component, OnInit } from '@angular/core';
import { BloodService } from '../blood.service';
import { AuthenticationService } from '../User/authentication.service';

@Component({
  selector: 'app-show-available-units',
  templateUrl: './show-available-units.component.html',
  styleUrls: ['./show-available-units.component.css']
})
export class ShowAvailableUnitsComponent implements OnInit {
  availableUnits: any;
  notified:boolean=false;
  constructor(private bloodService: BloodService, private authService: AuthenticationService) {
    this.bloodService.showAvailableUnits().subscribe(response => { this.availableUnits = response; })
  }

  ngOnInit() {

  }

  sendNotifications(bloodGroup) {
    this.bloodService.postBloodNeededNotification(bloodGroup).subscribe((response) => { this.notified=true;});
  }
}
