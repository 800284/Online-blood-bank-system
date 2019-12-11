import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BloodService } from '../blood.service';

@Component({
  selector: 'app-view-all-blood-requirements',
  templateUrl: './view-all-blood-requirements.component.html',
  styleUrls: ['./view-all-blood-requirements.component.css']
})
export class ViewAllBloodRequirementsComponent implements OnInit {
  bloodRequirement: any;
  dataLoaded: Promise<boolean>;
  requirementIsThere: boolean = false;
  constructor(private router: Router, private bloodService: BloodService) { }

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

  }

  donate() {
    this.router.navigate(['/donation-request'])
  }
}
