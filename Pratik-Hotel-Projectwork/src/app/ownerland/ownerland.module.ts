import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerlandRoutingModule } from './ownerland-routing.module';
import { OwnerlandComponent } from './ownerland.component';
import { OwnerloginComponent } from './ownerlogin/ownerlogin.component';
import { SharedModule } from '../shared/shared.module';
import { HotelRegistrationComponent } from './hotel-registration/hotel-registration.component';
import { HotelregistrationForm2Component } from './hotelregistration-form2/hotelregistration-form2.component';


@NgModule({
  declarations: [
    OwnerlandComponent,
    OwnerloginComponent,
    HotelRegistrationComponent,
    HotelregistrationForm2Component
  ],
  imports: [
    CommonModule,
    OwnerlandRoutingModule,
    SharedModule
  ]
})
export class OwnerlandModule { }
