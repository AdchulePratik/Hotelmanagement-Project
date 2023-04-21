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
  hotelRegistrationForm!:FormGroup;
  show:boolean =false;
  EndPoint:any;

  constructor(private formBuilder: FormBuilder,
    private dataService : DataService,
    private router: Router) {


}

ngOnInit(){
  this.hotelRegistration();
}
hotelRegistration(){
  this.hotelRegistrationForm = this.formBuilder.group({
    ownername: ['', [Validators.required, Validators.minLength(5)]],
    typeofapplicant: [''],
    hotelname: ['', [Validators.required, Validators.minLength(5)]],
    hotelcontactnobr: ['', [Validators.required, Validators.pattern("[0-9]*$"), Validators.maxLength(10)]],
    hoteladdress: ['', [Validators.required]],
    pancard: ['', [Validators.required, Validators.pattern('([A-Z]){5}([0-9]){4}([A-Z]){1}$')]],
    city: ['', [Validators.required]],
    starrating: ['', [Validators.required]],
    memberofhotelassociation: [''],
    association: ['select',],
    numberofrooms: ['', [Validators.required, Validators.pattern("[0-9]*$")]],
    numberofemployees: ['', [Validators.required, Validators.pattern("[0-9]*$")]],
    acceptterms: [false, Validators.requiredTrue],

  })

}
submit(){
  this.dataService.postApiCall('hotelDetails',this.hotelRegistrationForm.value).subscribe();
  console.log('this.hotelRegistrationForm.value',this.hotelRegistrationForm.value);
    // this.commonApicallService.postApiCall(this.getEndPoint, this.hotelRegistrationForm.value).subscribe(response => { })
    // this.commonApicallService.hotelDetailsList = 'hotelDetails';
    this.router.navigateByUrl('/owner/ownerlogin');

}
back(){
  this.router.navigateByUrl('/owner/ownerlogin');
}
toggleShow(){
  this.show = !this.show;
}
toggleHide(){
  this.show = false;
}




}
