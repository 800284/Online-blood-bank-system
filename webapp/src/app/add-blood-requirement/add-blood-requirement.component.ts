import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BloodRequirement } from '../BloodRequirement';
import { FormServiceService } from '../form-service.service';
import { BloodService } from '../blood.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blood-requirement',
  templateUrl: './add-blood-requirement.component.html',
  styleUrls: ['./add-blood-requirement.component.css']
})
export class AddBloodRequirementComponent implements OnInit {
  addRequirementForm:any;
  requirement:BloodRequirement;
  stateList:Array<any>;
  bloodGroups:Array<any>;
  cities: Array<any>;
  bloodGroupEmpty:boolean=true;
  stateClick:boolean=false;
  stateEmpty:boolean=true;
  areaEmpty:boolean = true;
  checkClick:boolean= false;
  areaClick:boolean=false;
  constructor(private formService:FormServiceService,private bloodService:BloodService,private router:Router) { }

  ngOnInit() {
    this.requirement={
      state: "",
      area: "",
      pincode: 0,
      bloodGroup: "",
      contactNumber: 0
    }
    this.bloodGroups = this.formService.getBloodGroups();
    this.stateList = this.formService.getStates();
    this.addRequirementForm = new FormGroup({
      contactNo: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      bloodGroupDivision: new FormGroup({
        bloodGroup: new FormControl('',[Validators.required])
      }),
      stateDivision: new FormGroup({
        state: new FormControl('',[Validators.required])
      }),
      areaDivision: new FormGroup({
        area: new FormControl('',[Validators.required])
      }),
      pincode: new FormControl('',[Validators.required])

    }
    )
  }

  addRequirement(addRequirementForm){
    this.requirement.bloodGroup = addRequirementForm.value.bloodGroupDivision.bloodGroup;
    this.requirement.area = addRequirementForm.value.areaDivision.area;
    this.requirement.state=addRequirementForm.value.stateDivision.state;
    this.requirement.pincode=addRequirementForm.value.pincode;
    this.requirement.contactNumber=addRequirementForm.value.contactNo;
    this.bloodService.addBloodRequirement(this.requirement).subscribe(response =>{this.router.navigate(["/addRequirementSuccess"])});
  }  

  changeState(count) {
    this.cities = this.stateList.find(con => con.name == count).cities;
  }
  stateCheck(value){
  if(value!=""){
    this.stateEmpty=false;
    
  }else{
    this.stateEmpty=true;
    this.areaEmpty=true;
  }
  this.areaEmpty=true
  this.areaClick=true
  this.stateClick = true;
  }
  
  areaClickFun(value){
    this.areaEmpty=false;
    if(value!=""){
      this.areaEmpty=false;
    }
  }
   bloodGroupCheck(value){
      if(value!=''){
        this.bloodGroupEmpty =false;
        
      }else{
        this.bloodGroupEmpty =true;
      }
      this.checkClick=true;
    }
}
