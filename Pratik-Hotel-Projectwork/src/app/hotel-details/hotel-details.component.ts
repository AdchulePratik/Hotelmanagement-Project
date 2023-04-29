import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CustomSnackbarComponent } from '../custom-snackbar/custom-snackbar.component';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent {
  hotelDetails: any;
  tableHeadings = ["Hotel Name", "Owner Name", "Hotel Contact No",
    "Hotel Address", "Hotel Email", "Rooms", "Speciality","Delete","Edit" ];
  endpoint!: string;
  hotelEndPoint = "hotelDetails";
  inputBoxValue: any;
  ownerName: any;
  hotelDetailsById: any;

  hotelDetailsByOwner: any = [];






  constructor(private dataservice: DataService,
    private router: Router,public dialog: MatDialog) {

  }

  ngOnInit() {
    this.endpoint = this.dataservice.endPoint;
    this.getHotelDetails();
  }
  async getHotelDetails() {
    this.hotelDetails = await this.dataservice.getApiCall(this.hotelEndPoint).toPromise();
    console.log('this.hotelDetails', this.hotelDetails);

  }
  async delete(id: number) {
    await this.dataservice.deleteApiCall(this.hotelEndPoint, id).toPromise();
    this.getHotelDetails();

    this.dialog.open(CustomSnackbarComponent,{
      minWidth:'200px',
      height:'100px',
    })
  }

    async edit(id:number){
      this.dataservice.editId = id;
      this.dataservice.EditJourney = true;

      this.hotelDetails = await this.dataservice.getApiCall(this.hotelEndPoint,id).toPromise();
      console.log('this.hotelDetailsById',this.hotelDetails);
      this.dataservice.hotelDetailsById = this.hotelDetails;

    // this.router.navigateByUrl('/owner/hotelRegistration-form2');
    this.router.navigateByUrl('/ownerland/hotelRegistration');



  }
  back() {
    if (this.endpoint == 'admin') {
      this.router.navigateByUrl('adminland');
    }
    else if (this.endpoint == 'admin') {
      this.router.navigateByUrl('ownerland');

    }
    else {
      this.router.navigateByUrl('ownerland');

    }
  }
}




