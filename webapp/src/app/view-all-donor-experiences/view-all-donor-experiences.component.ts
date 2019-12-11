import { Component, OnInit } from '@angular/core';
import { BloodService } from '../blood.service';
import { DonorExperience } from '../DonorExperience';

@Component({
  selector: 'app-view-all-donor-experiences',
  templateUrl: './view-all-donor-experiences.component.html',
  styleUrls: ['./view-all-donor-experiences.component.css']
})
export class ViewAllDonorExperiencesComponent implements OnInit {

  donorExperience: DonorExperience[];
  constructor(private bloodService: BloodService) { }

  ngOnInit() {
    this.bloodService.getAllDonorExperience().subscribe(response => {
      this.donorExperience = response;
    });
  }
}
