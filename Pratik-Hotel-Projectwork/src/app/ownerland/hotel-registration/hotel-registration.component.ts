import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-hotel-registration',
  templateUrl: './hotel-registration.component.html',
  styleUrls: ['./hotel-registration.component.scss']
})
export class HotelRegistrationComponent {
  hotelRegistrationForm!: FormGroup;
  show: boolean = false;
  EndPoint: any;
  isEditJourney: any;
  editId: any;
  hotelDetailsById: any;
  hotelEndPoint: any;


  constructor(private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router) {


  }

  ngOnInit() {
    this.isEditJourney = this.dataService.isEditJourney;
    this.editId = this.dataService.editId;
    this.hotelDetailsById = this.dataService.hotelDetailsById;

    if (this.isEditJourney) {
      console.log('this.hotelDetailsById', this.hotelDetailsById);
      if (this.hotelDetailsById) {
        this.hotelRegistration();

      }
    }
    else {
      this.hotelRegistration()
    }

  }
  //  async getHotelDetailsById() {
  //   this.hotelDetailsById =  await this.dataService.hotelDetailsById.getApiCall(this.hotelEndPoint,this.editId).toPromise();
  //   console.log('this.hotelDetailsById',this.hotelDetailsById);



  //   }
  hotelRegistration() {
    this.hotelRegistrationForm = this.formBuilder.group({
      ownerName: [this.hotelDetailsById ? this.hotelDetailsById?.ownerName : '', [Validators.required, Validators.minLength(5)]],
      typeOfApplicant: [this.hotelDetailsById ? this.hotelDetailsById?.typeOfApplicant : '', [Validators.required]],
      hotelName: [this.hotelDetailsById ? this.hotelDetailsById?.hotelName : '', [Validators.required, Validators.minLength(5)]],
      hotelContact: [this.hotelDetailsById ? this.hotelDetailsById?.hotelContact : '', [Validators.required, Validators.pattern("[0-9]*$"), Validators.maxLength(10)]],
      HotelAddress: [this.hotelDetailsById ? this.hotelDetailsById?.HotelAddress : '', [Validators.required]],
      pancard: [this.hotelDetailsById ? this.hotelDetailsById?.pancard : '', [Validators.required, Validators.pattern('([A-Z]){5}([0-9]){4}([A-Z]){1}$')]],
      city: [this.hotelDetailsById ? this.hotelDetailsById?.city : '', [Validators.required]],
      starRating: [this.hotelDetailsById ? this.hotelDetailsById?.starRating : '', [Validators.required]],
      hotelAsso: [this.hotelDetailsById ? this.hotelDetailsById?.hotelAsso : ''],
      hotelAssoList: [this.hotelDetailsById ? this.hotelDetailsById?.hotelAssoList : 'select',],
      numberOfRooms: [this.hotelDetailsById ? this.hotelDetailsById?.numberOfRooms : '', [Validators.required, Validators.pattern("[0-9]*$")]],
      noOfEmployes: [this.hotelDetailsById ? this.hotelDetailsById?.noOfEmployes : '', [Validators.required, Validators.pattern("[0-9]*$")]],
      acceptTerms: [this.hotelDetailsById ? this.hotelDetailsById?.acceptTerms : false, Validators.requiredTrue],


    })

  }
  submit() {
    console.log(this.hotelRegistrationForm.value);
    if(this.isEditJourney){
    //put/patch pi
    }
    else{
      this.dataService.postApiCall(this.hotelEndPoint, this.hotelRegistrationForm.value).subscribe();
    }

    // this.commonApicallService.postApiCall(this.getEndPoint, this.hotelRegistrationForm.value).subscribe(response => { })
    // this.commonApicallService.hotelDetailsList = 'hotelDetails';
    this.router.navigateByUrl('ownerland/ownerlogin');

  }
  back() {
    this.router.navigateByUrl('ownerland/ownerlogin');
  }
  toggleShow() {
    this.show = !this.show;
  }
  toggleHide() {
    this.show = false;
  }




}
