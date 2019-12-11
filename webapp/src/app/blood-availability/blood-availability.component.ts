import { Component, OnInit } from '@angular/core';
import { BloodAvailability } from '../BloodAvailability';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../User/authentication.service';
import { FormServiceService } from '../form-service.service';
import { BloodService } from '../blood.service';

@Component({
  selector: 'app-blood-availability',
  templateUrl: './blood-availability.component.html',
  styleUrls: ['./blood-availability.component.css']
})
export class BloodAvailabilityComponent implements OnInit {

  bloodGroup: string[];
  states: Array<any>;
  cities: string[];
  show: string;
  areaEmpty: boolean = true;
  areaClick: boolean = false;
  bloodAvailabilityForm: FormGroup;

  bloodAvailability: BloodAvailability[];

  constructor(private authService: AuthenticationService, private formService: FormServiceService, private bloodAvailabilityService: BloodService) { }

  ngOnInit() {
    this.bloodGroup = this.formService.getBloodGroups();
    this.states = this.formService.getStates();

    this.bloodAvailabilityForm = new FormGroup({
      'bloodGroupDivision': new FormGroup({
        'bloodGroup': new FormControl('')
      }),
      'stateDivision': new FormGroup({
        'state': new FormControl('')
      }),
      'areaDivision': new FormGroup({
        'area': new FormControl('')
      }),
      'pinCode': new FormControl('', [
        Validators.required,
        Validators.min(100000),
        Validators.max(999999)
      ]),
    });
  }

  changeState(count) {
    this.cities = this.states.find(con => con.name == count).cities;
  }

  search(form: any) {
    this.bloodAvailabilityService.getAllAvailableBloodGroups(form.value.bloodGroupDivision.bloodGroup,
      form.value.stateDivision.state, form.value.areaDivision.area).subscribe(response => {
        if (response.length == 0) {
          this.show = "request";
        } else {
          this.bloodAvailability = response;
          this.show = "table";
        }
      });
  }
  stateCheck() {

    this.areaEmpty = true
    this.areaClick = true

  }

  areaClickFun(value) {
    if (value == "") {
      this.areaEmpty = true;
      this.areaClick = true
    } else {
      this.areaEmpty = false;
      this.areaClick = false;
    }
  }
}
