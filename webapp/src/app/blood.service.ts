import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BloodRequirement } from './BloodRequirement';
import { AuthenticationService } from './User/authentication.service';
import { BloodAvailability } from './BloodAvailability';
import { DonorExperience } from './DonorExperience';
import { FAQ } from './FAQ';
import { NotificationsComponent } from './notifications/notifications.component';

@Injectable({
  providedIn: 'root'
})
export class BloodService {

  constructor(private httpClient: HttpClient, private authService: AuthenticationService) { }


  addBloodRequirement(bloodRequirement: BloodRequirement) {

    let url = environment.baseUrl + "/blood-service/blood-requirement/insert"
    let token = 'Bearer ' + this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': token
      })
    };
    return this.httpClient.post<any>(url, bloodRequirement, httpOptions);

  }
  viewAllRequirements() {
    let url = environment.baseUrl + "/blood-service/blood-requirement/fetch"
    return this.httpClient.get<any>(url);

  }

  getAllAvailableBloodGroups(bloodGroup: string, state: string, area: string) {
    let baseUrl = environment.baseUrl + '/blood-service/blood-bank/blood-availability';
    let httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.authService.getToken()
      })
    };
    let url = baseUrl + '/' + bloodGroup + '/' + state + '/' + area;
    return this.httpClient.get<BloodAvailability[]>(url, httpOption);
  }

  bookHospitalSlot(hospitalBookingrequest, username: String) {
    let baseUrl = environment.baseUrl + '/blood-service/blood-bank/donate/' + username;
    let httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.authService.getToken()
      })
    };
    return this.httpClient.post(baseUrl, hospitalBookingrequest, httpOption);
  }
  getAllDonorExperience() {
    let baseUrl = environment.baseUrl + '/blood-service/blood-bank/donor-experience';
    let httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };
    return this.httpClient.get<DonorExperience[]>(baseUrl);
  }
  postDonorExperience(userExperience: DonorExperience) {
    let baseUrl = environment.baseUrl + '/blood-service/blood-bank/donor-experience';
    let httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.authService.getToken()
      })
    };
    return this.httpClient.post<any>(baseUrl, userExperience, httpOption);
  }

  getFAQs() {
    let baseUrl = environment.baseUrl + '/blood-service/blood-bank/faq';
    let httpOption: any;
    if (this.authService.isLogin()) {
      httpOption = {
        headers: new HttpHeaders({
          'content-type': 'application/json',
          'Authorization': 'Bearer ' + this.authService.getToken()
        })
      };
    } else {
      httpOption = {
        headers: new HttpHeaders({
          'content-type': 'application/json'
        })
      };
    }

    return this.httpClient.get(baseUrl, httpOption);

  }

  postQuestion(username, faq) {
    let baseUrl = environment.baseUrl + '/blood-service/blood-bank/faq/' + username;
    let httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.authService.getToken()
      })
    };

    return this.httpClient.post(baseUrl, faq, httpOption);
  }

  answerQuestion(faq: FAQ) {
    let baseUrl = environment.baseUrl + '/blood-service/blood-bank/faq/edit-question';
    let httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.authService.getToken()
      })
    };
    console.log(faq);
    return this.httpClient.put<any>(baseUrl, faq, httpOption);
  }

  getUsersQuestion(username) {
    let baseUrl = environment.baseUrl + '/blood-service/blood-bank/faq/get-question/' + username;
    let httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.authService.getToken()
      })
    };

    return this.httpClient.get<any>(baseUrl, httpOption);
  }
  getNotification(username: String) {
    let baseUrl = environment.baseUrl + '/blood-service/blood-bank/notification/' + username;
    let httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.authService.getToken()
      })
    };
    return this.httpClient.get<any>(baseUrl, httpOption);
  }

  removeNotifications(id) {
    let baseUrl = environment.baseUrl + '/blood-service/blood-bank/notification-history-id/' + id;
    let httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.authService.getToken()
      })
    };
    return this.httpClient.delete<any>(baseUrl, httpOption);
  }
  updateNotification(username) {
    let baseUrl = environment.baseUrl + '/blood-service/blood-bank/update-notification/' + username;

    let httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.authService.getToken()
      })
    };

    return this.httpClient.put<any>(baseUrl, null, httpOption);
  }
  showAvailableUnits() {
    let baseUrl = environment.baseUrl + '/blood-service/blood-bank/blood-availability/fetch-blood-availability-admin/';

    let httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.authService.getToken()
      })
    };

    return this.httpClient.get<any>(baseUrl, httpOption);

  }
  postBloodNeededNotification(bloodGroup) {
    let baseUrl = environment.baseUrl + '/blood-service/blood-bank/blood-availability/insert-notification-specific-blood-group/' + bloodGroup;

    let httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.authService.getToken()
      })
    };
    return this.httpClient.post<any>(baseUrl, null, httpOption);
  }

  postBloodDonationNotification(userName: String) {
    let baseUrl = environment.baseUrl + '/blood-service/blood-bank/blood-donation-notification/' + userName;

    let httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.authService.getToken()
      })
    };
    return this.httpClient.post<any>(baseUrl, null, httpOption);
  }


}
