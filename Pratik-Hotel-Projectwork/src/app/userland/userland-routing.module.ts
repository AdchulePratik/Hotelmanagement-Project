import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlandComponent } from './userland.component';
import { BooknowComponent } from './booknow/booknow.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { HoteldetailsBookuserComponent } from './hoteldetails-bookuser/hoteldetails-bookuser.component';


const routes: Routes = [
  { path: '', component: UserlandComponent },
  {path: 'booknow',component: BooknowComponent},
  {path: 'userlogin',component: UserloginComponent},
  {path: 'hotelDetails-user',component: HoteldetailsBookuserComponent},
  {path: 'usersignIn',component: UserSignInComponent},
  {path:'usersignUp',component: UserSignUpComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserlandRoutingModule { }
