import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {



  hotelBookUrl: string = 'http://localhost:3000/hotelBook/';
  editUrl!: string;
  eeditClicked = false;

  EditJourney: any;
  isEditJourney: any;
  editJourney: any;
  editId!: any;
  hotelDetailsById: any;

  url = 'http://localhost:3000/';
  //endPoint: any;
  endPoint = 'owner';


  signinOrSignUp: any;
  ownerName: any;
  selectedHotel: any;
  editClicked = true;





  constructor(private http: HttpClient) {


  }

  postApiCall(endPoint: any, data: any) {
    let updateUrl = this.url + endPoint;
    return this.http.post(updateUrl, data)
  }
  getApiCall(endPoint: any, id?: any) {
    let updateUrl = id ? this.url + endPoint + '/' + id : this.url + endPoint;
    return this.http.get(updateUrl);
  }
  deleteApiCall(endPoint: string, id: number) {
    let updateUrl = this.url + endPoint + '/' + id;
    return this.http.delete(updateUrl);

  }
  patchApiCall(endPoint: string, data: any) {
    let updateUrl = this.url + endPoint + '/';
    return this.http.patch(updateUrl, data);
  }
  gethotel() {
    return this.http.get(this.editUrl)
  }
  gethotelBook() {
    return this.http.get(this.hotelBookUrl)
  }
  postForNewhotel(body: any){
    return this.http.post(this.hotelBookUrl,body)
  }
  gethotelBooks(){
    return this.http.get("http://localhost:3000/hotelBook")
  }

  idSet(id: number) {
    this.editUrl = `${this.hotelBookUrl}${id}`;
    this.editClicked = true
  }

}
