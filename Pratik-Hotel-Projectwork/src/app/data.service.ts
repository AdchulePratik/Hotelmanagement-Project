import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  EditJourney: any;
  isEditJourney: any;
  editJourney: any;
  editId!: any;
  navButton:any;
  moduleNavigation:any;
  selectedModule!: string;

  hotelDetailsById: any;



  url = 'http://localhost:3000/';
  //endPoint: any;
  endPoint = 'owner';

  Data: any;
  signinOrSignUp: any;
  ownerName: any;
  selectedHotel: any;

  constructor(private http: HttpClient) {


  }

  postApiCall(endPoint: any, data: any) {
    let updateUrl = this.url + endPoint;
    return this.http.post(updateUrl, data)
  }
  getApiCall(endPoint: any,id?:any) {
    let updateUrl = id? this.url + endPoint + '/' + id : this.url + endPoint;
    return this.http.get(updateUrl);
  }
  deleteApiCall(endPoint: string, id: number) {
    let updateUrl = this.url + endPoint + '/' + id;
    return this.http.delete(updateUrl);

  }
  patchApiCall(endPoint: string,data:any) {
    let updateUrl = this.url + endPoint + '/' ;
    return this.http.patch(updateUrl,data);
}
}
