import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { DonateComponent } from './donate/donate.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { BloodRequestComponent } from './blood-request/blood-request.component';
import { AvailabiltyComponent } from './availabilty/availabilty.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './User/login/login.component';
import { SignupSuccessComponent } from './User/signup-success/signup-success.component';
import { ViewAllBloodRequirementsComponent } from './view-all-blood-requirements/view-all-blood-requirements.component';
import { AddBloodRequirementComponent } from './add-blood-requirement/add-blood-requirement.component';
import { BloodRequirementAdditionSuccessComponent } from './blood-requirement-addition-success/blood-requirement-addition-success.component';
import { BloodAvailabilityComponent } from './blood-availability/blood-availability.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BloodDonationComponent } from './blood-donation/blood-donation.component';
import { BookHospitalComponent } from './book-hospital/book-hospital.component';
import { TipsComponent } from './tips/tips.component';
import { RouteToTipsComponent } from './route-to-tips/route-to-tips.component';
import { ViewAllDonorExperiencesComponent } from './view-all-donor-experiences/view-all-donor-experiences.component';
import { PostDonorExperienceComponent } from './post-donor-experience/post-donor-experience.component';
import { FaqComponent } from './faq/faq.component';
import { UserQuestionsComponent } from './user-questions/user-questions.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ShowAvailableUnitsComponent } from './show-available-units/show-available-units.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    DonateComponent,
    ExperiencesComponent,
    BloodRequestComponent,
    AvailabiltyComponent,
    SignupComponent,
    LoginComponent,
    SignupSuccessComponent,
    ViewAllBloodRequirementsComponent,
    AddBloodRequirementComponent,
    BloodRequirementAdditionSuccessComponent,
    BloodAvailabilityComponent,
    BloodDonationComponent,
    BookHospitalComponent,
    TipsComponent,
    RouteToTipsComponent,
    ViewAllDonorExperiencesComponent,
    PostDonorExperienceComponent,
    FaqComponent,
    UserQuestionsComponent,
    NotificationsComponent,
    ShowAvailableUnitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
