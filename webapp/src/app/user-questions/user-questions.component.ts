import { Component, OnInit } from '@angular/core';
import { BloodService } from '../blood.service';
import { AuthenticationService } from '../User/authentication.service';

@Component({
  selector: 'app-user-questions',
  templateUrl: './user-questions.component.html',
  styleUrls: ['./user-questions.component.css']
})
export class UserQuestionsComponent implements OnInit {
  faqArray: any;
  constructor(private bloodService: BloodService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.bloodService.getUsersQuestion(this.authService.getLoggedinUser()).subscribe((response) => { this.faqArray = response; })
  }

}
