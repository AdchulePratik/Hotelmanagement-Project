import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminlandComponent } from './adminland/adminland.component';
import { OwnerlandComponent } from './ownerland/ownerland.component';
import { UserlandComponent } from './userland/userland.component';
import { AdminloginComponent } from './adminland/adminlogin/adminlogin.component';
import { OwnerloginComponent } from './ownerland/ownerlogin/ownerlogin.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { ViewMyhotelListComponent } from './view-myhotel-list/view-myhotel-list.component';




const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  // {path :'admin',component:AdminComponent},
  // {path :'owner',component:OwnerComponent},
  // {path: 'user', component:UserComponent},
  { path:'signUp',component:SignUpComponent},
  {path : 'signIn', component:SignInComponent},
 // {path:'loginsuccess',component:LoginsuccessComponent},
 {path: 'hotelDetails',component:HotelDetailsComponent},
 {path:'viewMyHotelList',component:ViewMyhotelListComponent},






  { path: 'adminland', loadChildren: () => import('./adminland/adminland.module').then(m => m.AdminlandModule) },
  { path: 'userland', loadChildren: () => import('./userland/userland.module').then(m => m.UserlandModule) },
   { path: 'ownerland', loadChildren: () => import('./ownerland/ownerland.module').then(m => m.OwnerlandModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
