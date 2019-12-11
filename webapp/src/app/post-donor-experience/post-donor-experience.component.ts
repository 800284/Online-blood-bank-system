import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../User/authentication.service';
import { BloodService } from '../blood.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DonorExperience } from '../DonorExperience';

@Component({
  selector: 'app-post-donor-experience',
  templateUrl: './post-donor-experience.component.html',
  styleUrls: ['./post-donor-experience.component.css']
})
export class PostDonorExperienceComponent implements OnInit {

  donorExperienceForm: FormGroup;
  shareStatus: boolean = false;

  constructor(private authService: AuthenticationService, private bloodService: BloodService) { }

  ngOnInit() {


    this.donorExperienceForm = new FormGroup({
      'hospitalName': new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(15)
      ]),
      'city': new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(15)
      ]),
      'feedbackComments': new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(500)
      ])
    });
  }

  share(form: any) {
    let donorExperience: DonorExperience = {
      hospitalName: form.value.hospitalName,
      city: form.value.city,
      feedbackComments: form.value.feedbackComments
    };
    this.bloodService.postDonorExperience(donorExperience).subscribe(response => {
      this.shareStatus = response;
    })
  }
}
