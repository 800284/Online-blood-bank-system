import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../User/User';
import { UserService } from '../User/user.service';
import { Router } from '@angular/router';
import { FormServiceService } from '../form-service.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  gender: any[];
  bloodGroups: any[];
  stateList: Array<any>;


  stateClick: boolean = false;
  stateEmpty: boolean = true;
  bloodGroupEmpty: boolean = true;
  cities: Array<any>;
  signupForm: any;
  user: User;
  areaEmpty: boolean = true;
  areaClick: boolean = false;
  checkClick: boolean = false;
  checkpass: boolean = false;
  userPresent: boolean = false;
  constructor(private userService: UserService, private router: Router, private formService: FormServiceService) {

  }

  ngOnInit() {

    this.user = {
      username: "",
      firstname: "",
      lastname: "",
      age: 0,
      gender: "",
      contactNo: 0,
      email: "",
      password: "",
      weight: 0,
      state: "",
      area: "",
      pinCode: 0,
      bloodGroup: "",
      confirmPassword: ""
    }
    this.stateList = this.formService.getStates();
    this.bloodGroups = this.formService.getBloodGroups();
    this.gender = this.formService.getGenders();
    this.signupForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
      firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      password: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
      confirmPassword: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.maxLength(2)]),
      genderDivision: new FormGroup({
        gender: new FormControl('')
      }),
      contactNo: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      emailId: new FormControl('', [Validators.required, Validators.email]),
      weight: new FormControl('', [Validators.required]),
      bloodGroupDivision: new FormGroup({
        bloodGroup: new FormControl('')
      }),
      stateDivision: new FormGroup({
        state: new FormControl('')
      }),
      areaDivision: new FormGroup({
        area: new FormControl('')
      }),
      pincode: new FormControl('', [Validators.required])

    });

  }
  changeState(count) {
    this.cities = this.stateList.find(con => con.name == count).cities;
  }
  checkIfMatchingPasswords() {
    if (this.signupForm.value.password == this.signupForm.value.confirmPassword) {
      this.checkpass = true;
    } else {
      this.checkpass = false;
    }
  }

  bloodGroupCheck(value) {
    if (value != '') {
      this.bloodGroupEmpty = false;

    } else {
      this.bloodGroupEmpty = true;
    }
    this.checkClick = true;
  }
  userAdd(signupForm) {
    this.user.username = signupForm.value.userName;
    this.user.firstname = signupForm.value.firstName;
    this.user.lastname = signupForm.value.lastName;
    this.user.password = signupForm.value.password;
    this.user.confirmPassword = signupForm.value.confirmPassword;
    this.user.age = signupForm.value.age;
    this.user.gender = signupForm.value.genderDivision.gender;
    this.user.contactNo = signupForm.value.contactNo;
    this.user.email = signupForm.value.emailId;
    this.user.weight = signupForm.value.weight;
    this.user.bloodGroup = signupForm.value.bloodGroupDivision.bloodGroup;
    this.user.state = signupForm.value.stateDivision.state;
    this.user.area = signupForm.value.areaDivision.area;
    this.user.pinCode = signupForm.value.pincode;
    this.userService.addUser(this.user).subscribe(response => { this.router.navigate(["/signup-success"]) }, (error) => this.userPresent = true)
  }
  stateCheck(value) {
    if (value != "") {
      this.stateEmpty = false;

    } else {
      this.stateEmpty = true;
    }
    this.areaEmpty = true
    this.areaClick = true
    this.stateClick = true;
  }

  areaClickFun(value) {
    if (value == "") {
      this.areaEmpty = true;
      this.areaClick = true;
    } else {
      this.areaEmpty = false;
      this.areaClick = false;
    }


  }
  changeValue() {
    this.userPresent = false;
  }
}
