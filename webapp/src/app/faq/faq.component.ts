import { Component, OnInit } from '@angular/core';
import { BloodService } from '../blood.service';
import { FAQ } from '../FAQ';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../User/User';
import { AuthenticationService } from '../User/authentication.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  //faqArray:string[];
  faqArray: any[] = [];
  user: User;
  faqForm: any;
  answerPosted: boolean = false;
  faq: FAQ;
  answerSuccess: boolean = false;
  faqid: any;
  arrayEmpty: boolean = false;

  modifyFaq: any;
  answerFaqForm: any;
  answerQuestion: boolean = false;
  constructor(private bloodService: BloodService, private authService: AuthenticationService) { }

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
    this.bloodService.getFAQs().subscribe((response: any) => {
      this.faqArray = response;
    });

    this.faqForm = new FormGroup({
      question: new FormControl('')
    });

    this.faq = {
      id: null,
      user: this.user,
      question: "",
      answer: null
    }

    this.modifyFaq = {
      id: null,
      user: this.user,
      question: "",
      answer: null
    }
    this.answerFaqForm = new FormGroup({
      answer: new FormControl('')
    })
  }

  postQuestion(faqForm) {
    this.faq.question = faqForm.value.question;
    this.bloodService.postQuestion(this.authService.getLoggedinUser(), this.faq).subscribe((response) => { console.log(response); this.answerSuccess = true; });
  }

  isLoggedIn() {
    return this.authService.isLogin();
  }

  getUserName() {
    return this.authService.getLoggedinUser();
  }

  giveAnswer(faq) {
    this.answerQuestion = true;
    this.faqid = faq.id;
    this.modifyFaq = faq;
  }
  answerFaqFunction(answerFaqForm) {
    this.modifyFaq.answer = answerFaqForm.value.answer;
    this.bloodService.answerQuestion(this.modifyFaq).subscribe(response => { this.answerPosted = true; console.log(this.answerPosted); });
  }

  isEmpty() {
    if (this.faqArray.length > 0) {
      this.arrayEmpty = false;
    } else {
      this.arrayEmpty = true;
    }
    return this.arrayEmpty;
  }
}
