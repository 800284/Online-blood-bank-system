import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HospitalBookingRequest } from '../HospitalBookingRequest';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormServiceService } from '../form-service.service';
import { BloodService } from '../blood.service';
import { AuthenticationService } from '../User/authentication.service';


@Component({
  selector: 'app-book-hospital',
  templateUrl: './book-hospital.component.html',
  styleUrls: ['./book-hospital.component.css']
})
export class BookHospitalComponent implements OnInit {
  @Input() hospitalBookingRequest: HospitalBookingRequest;
  @Output() hospitalBooked: any;
  sucessMsg: boolean = false;
  hospitalForm: FormGroup;
  timeGroup: string[];
  slotTakenFlag: boolean = false;
  hospitalNameFlag: boolean;
  cityFlag: boolean;
  constructor(private formService: FormServiceService, private bloodService: BloodService, private authService: AuthenticationService) { this.hospitalBooked = new EventEmitter(); }

  ngOnInit() {
    this.hospitalForm = new FormGroup({
      'hospitalName': new FormControl("", [Validators.required, Validators.maxLength(15)]),
      'city': new FormControl("", [Validators.required, Validators.maxLength(15)]),
      'date': new FormControl("", Validators.required),
      'timeGroup': new FormGroup({
        'time': new FormControl("", [Validators.required]),
      })
    });
    this.timeGroup = this.formService.getTimeSlot();
    this.hospitalNameFlag = false;
    this.cityFlag = false;
  }

  bookAppointment(hospitalForm) {
    this.hospitalBookingRequest.hospitalName = hospitalForm.value.hospitalName;
    this.hospitalBookingRequest.city = hospitalForm.value.city;
    this.hospitalBookingRequest.date = hospitalForm.value.date;
    this.hospitalBookingRequest.time = hospitalForm.value.timeGroup.time;
    if (hospitalForm.valid && !this.hospitalNameFlag && !this.cityFlag) {
      this.bloodService.bookHospitalSlot(this.hospitalBookingRequest, this.authService.getLoggedinUser()).subscribe((response) => {
        this.sucessMsg = true;

        this.slotTakenFlag = false;
      }, (error) => {
        this.slotTakenFlag = true;
      })
    } else {
      this.slotTakenFlag = true;
    }
    this.hospitalBooked.emit(true);
  }
  checkLength(value) {
    if (value.length >= 15) {
      this.hospitalNameFlag = true;
    } else {
      this.hospitalNameFlag = false;
    }
  }
  checkCityLength(value) {
    if (value.length >= 15) {
      this.cityFlag = true;
    } else {
      this.cityFlag = false;
    }
  }
  slotBookedFlag() {
    this.slotTakenFlag = false;
  }

}
