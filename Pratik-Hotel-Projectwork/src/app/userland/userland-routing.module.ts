import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlandComponent } from './userland.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { BooknowComponent } from './booknow/booknow.component';
import { HoteldetailsBookuserComponent } from './hoteldetails-bookuser/hoteldetails-bookuser.component';
import { UserHotelbookComponent } from './user-hotelbook/user-hotelbook.component';
import { SuccessfullybookComponent } from './successfullybook/successfullybook.component';
import { YourhotelbookComponent } from './yourhotelbook/yourhotelbook.component';


const routes: Routes = [
  { path: '', component: UserlandComponent },
  { path: 'userlogin', component: UserloginComponent },
  { path: 'hotelDetails-user', component: HoteldetailsBookuserComponent },
  { path: 'usersignIn', component: UserSignInComponent },
  { path: 'usersignUp', component: UserSignUpComponent },
  { path: 'booknow', component: BooknowComponent },
  { path: 'userbook', component: UserHotelbookComponent },
  {path: 'hotelsuccess',component: SuccessfullybookComponent},
  {path: 'yourbook',component: YourhotelbookComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserlandRoutingModule { }
