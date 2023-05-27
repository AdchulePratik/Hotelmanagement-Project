import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-hotelregistration-form2',
  templateUrl: './hotelregistration-form2.component.html',
  styleUrls: ['./hotelregistration-form2.component.scss']
})
export class HotelregistrationForm2Component {
  hotelRegistrationform2!: FormGroup;
  // show: boolean = false;
  editJourney!: any;
  editId!: any;
  hotelDetailsById: any;
  hotelEndPoint: any;


  constructor(private router: Router, private dataservice: DataService,
    private fb: FormBuilder) {

  }

  ngOnInit() {
    this.editJourney = this.dataservice.editJourney;
    this.editId = this.dataservice.editId;
    this.hotelDetailsById = this.dataservice.hotelDetailsById;

    if (this.editJourney) {
      console.log('this.hotelDetailsById', this.hotelDetailsById);

      if (this.hotelDetailsById) {
        this.hotelRegistration2();
      }
    }
    else {
      this.hotelRegistration2()

    }
  }
  hotelRegistration2() {
    throw new Error('Method not implemented.');
  }


  hotelRegistraion2(){
    this.hotelRegistrationform2 = this.fb.group({

      hotelname:[this.hotelDetailsById ? this.hotelDetailsById ?.hotelname :'',[Validators.required,Validators.pattern(('[a-zA--Z]*$')),Validators.minLength(2)]],
      ownername:[this.hotelDetailsById ? this.hotelDetailsById ?.ownername :'',[Validators.required,Validators.pattern(('[a-zA-Z]*$')),Validators.minLength(2)]],
      hotelcontactno:[this.hotelDetailsById ? this.hotelDetailsById ?.hotelcontactno :'',[Validators.required,Validators.pattern(('[0-9]*$'))]],
      hoteladdress:[this.hotelDetailsById ? this.hotelDetailsById ?.hoteladdress :'',[Validators.required]],
      hotelemailid:[this.hotelDetailsById ? this.hotelDetailsById ?.hotelemailid :'',[Validators.required]],
      totalrooms:[this.hotelDetailsById ? this.hotelDetailsById ?.totalrooms :'',[Validators.required]],
      speciality:[this.hotelDetailsById ?this.hotelDetailsById ?.speciality :'',]

})

  }


    //  async getHotelDetailsById() {
  //   this.hotelDetailsById =  await this.dataServiceService.getApiCall(this.hotelEndPoint, this.editId).toPromise();

  // }
  submit(){
    console.log(this.hotelRegistrationform2.value);

    if (this.editJourney) {
       //put/patch pi

    }
    else {
      this.dataservice.postApiCall(this.hotelEndPoint,this.hotelRegistrationform2.value).subscribe();
    }
    this.router.navigateByUrl('/ownerland/ownerlogin');

  }
  // toggleShow(){
  //   this.show = !this.show;
  // }
  // HideShow(){
  //   this.show = false;
  // }








}


