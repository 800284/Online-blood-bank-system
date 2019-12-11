import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HospitalBookingRequest } from '../HospitalBookingRequest';
import { AuthenticationService } from '../User/authentication.service';
import { FormServiceService } from '../form-service.service';
import { BloodService } from '../blood.service';


@Component({
  selector: 'app-blood-donation',
  templateUrl: './blood-donation.component.html',
  styleUrls: ['./blood-donation.component.css']
})
export class BloodDonationComponent implements OnInit {
  bookAppointment: boolean = false;
  bloodGroup: string[];
  states: Array<any>;
  cities: string[];
  show: string;
  areaEmpty: boolean = true;
  areaClick: boolean = false;
  donorRequestForm: FormGroup;
  hospitalBooking: boolean = false;
  hospitalBookingRequest: HospitalBookingRequest;

  constructor(private formService: FormServiceService, private bloodAvailabilityService: BloodService) { }

  ngOnInit() {
    this.hospitalBookingRequest = {
      bloodGroup: "",
      state: "",
      city: "",
      area: "",
      pinCode: 0,
      contactNo: 0,
      hospitalName: "",
      date: new Date(),
      time: ""
    }
    this.bloodGroup = this.formService.getBloodGroups();
    this.states = this.formService.getStates();

    this.donorRequestForm = new FormGroup({
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
      'contactNo': new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]),
    });
  }

  changeState(count) {
    this.cities = this.states.find(con => con.name == count).cities;
  }
  appointmentRequest(donorRequestForm) {
    this.hospitalBookingRequest.state = donorRequestForm.value.stateDivision.state;
    this.hospitalBookingRequest.area = donorRequestForm.value.areaDivision.area;
    this.hospitalBookingRequest.bloodGroup = donorRequestForm.value.bloodGroupDivision.bloodGroup;
    this.hospitalBookingRequest.pinCode = donorRequestForm.value.pinCode;
    this.hospitalBookingRequest.contactNo = donorRequestForm.value.contactNo;
    this.bookAppointment = true;
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
  isHospitalBooked($event) {
    this.hospitalBooking = $event;
  }
}
