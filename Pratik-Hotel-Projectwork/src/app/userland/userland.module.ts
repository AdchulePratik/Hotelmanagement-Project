import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlandRoutingModule } from './userland-routing.module';
import { UserlandComponent } from './userland.component';
import { SharedModule } from '../shared/shared.module';
import { BooknowComponent } from './booknow/booknow.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { HoteldetailsBookuserComponent } from './hoteldetails-bookuser/hoteldetails-bookuser.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { UserHotelbookComponent } from './user-hotelbook/user-hotelbook.component';
import { SuccessfullybookComponent } from './successfullybook/successfullybook.component';
import { YourhotelbookComponent } from './yourhotelbook/yourhotelbook.component';



@NgModule({
  declarations: [
    UserlandComponent,
    BooknowComponent,
    UserloginComponent,
    HoteldetailsBookuserComponent,
    UserSignInComponent,
    UserSignUpComponent,
    UserHotelbookComponent,
    SuccessfullybookComponent,
    YourhotelbookComponent,

  ],
  imports: [
    CommonModule,
    UserlandRoutingModule,
    SharedModule,

  ]
})
export class UserlandModule { }
