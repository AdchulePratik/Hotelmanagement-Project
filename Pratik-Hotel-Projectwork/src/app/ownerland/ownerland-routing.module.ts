import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerlandComponent } from './ownerland.component';
import { OwnerloginComponent } from './ownerlogin/ownerlogin.component';
import { HotelRegistrationComponent } from './hotel-registration/hotel-registration.component';
import { HotelregistrationForm2Component } from './hotelregistration-form2/hotelregistration-form2.component';


const routes: Routes = [
  { path: '', component: OwnerlandComponent },
  { path: 'ownerlogin',component: OwnerloginComponent},
  {path: 'hotelRegistration',component:HotelRegistrationComponent},
  {path:'hotelRegistration-form2',component:HotelregistrationForm2Component},

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerlandRoutingModule { }
