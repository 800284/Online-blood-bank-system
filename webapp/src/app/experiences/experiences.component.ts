import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToExperiences() {
    this.router.navigate(['/post-donor-experience']);
  }
}
