import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DonateComponent } from './donate/donate.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { BloodRequestComponent } from './blood-request/blood-request.component';
import { AvailabiltyComponent } from './availabilty/availabilty.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './User/login/login.component';
import { SignupSuccessComponent } from './User/signup-success/signup-success.component';
import { AddBloodRequirementComponent } from './add-blood-requirement/add-blood-requirement.component';
import { BloodRequirementAdditionSuccessComponent } from './blood-requirement-addition-success/blood-requirement-addition-success.component';
import { BloodAvailabilityComponent } from './blood-availability/blood-availability.component';
import { AuthGuard } from './User/auth.guard';
import { BloodDonationComponent } from './blood-donation/blood-donation.component';
import { TipsComponent } from './tips/tips.component';
import { RouteToTipsComponent } from './route-to-tips/route-to-tips.component';
import { PostDonorExperienceComponent } from './post-donor-experience/post-donor-experience.component';
import { FaqComponent } from './faq/faq.component';
import { UserQuestionsComponent } from './user-questions/user-questions.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ShowAvailableUnitsComponent } from './show-available-units/show-available-units.component';


const routes: Routes = [{ path: "", redirectTo: "home", pathMatch: "full" },
{ path: "", component: HomePageComponent },
{
  path: "home", component: HomePageComponent, children: [
    {
      path: "",
      component: DonateComponent,
      outlet: "customoutlet"
    },
    {
      path: "donate",
      component: DonateComponent,
      outlet: "customoutlet"
    },
    {
      path: "experiences",
      component: ExperiencesComponent,
      outlet: "customoutlet"
    },
    {
      path: "request",
      component: BloodRequestComponent,
      outlet: "customoutlet"
    },
    {
      path: "availability",
      component: AvailabiltyComponent,
      outlet: "customoutlet"
    },
    {
      path: "tips",
      component: RouteToTipsComponent,
      outlet: "customoutlet"
    }
  ]
},
{ path: "register", component: SignupComponent },
{ path: "login", component: LoginComponent },
{ path: "signup-success", component: SignupSuccessComponent },
{ path: "add-requirement", component: AddBloodRequirementComponent },
{ path: "addRequirementSuccess", component: BloodRequirementAdditionSuccessComponent },
{ path: "blood-availability", component: BloodAvailabilityComponent, canActivate: [AuthGuard] },
{ path: "donation-request", component: BloodDonationComponent, canActivate: [AuthGuard] },
{ path: "tips", component: TipsComponent },
{ path: "post-donor-experience", component: PostDonorExperienceComponent, canActivate: [AuthGuard] },
{ path: "faq", component: FaqComponent },
{ path: "view-questions", component: UserQuestionsComponent, canActivate: [AuthGuard] },
{ path: "notifications", component: NotificationsComponent, canActivate: [AuthGuard] },
{ path: "notifications/:value", component: NotificationsComponent, canActivate: [AuthGuard] },
{ path: "check-availability", component: ShowAvailableUnitsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
