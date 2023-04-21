import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerlandRoutingModule } from './ownerland-routing.module';
import { OwnerlandComponent } from './ownerland.component';
import { OwnerloginComponent } from './ownerlogin/ownerlogin.component';
import { SharedModule } from '../shared/shared.module';
import { HotelRegistrationComponent } from './hotel-registration/hotel-registration.component';


@NgModule({
  declarations: [
    OwnerlandComponent,
    OwnerloginComponent,
    HotelRegistrationComponent
  ],
  imports: [
    CommonModule,
    OwnerlandRoutingModule,
    SharedModule
  ]
})
export class OwnerlandModule { }
