import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminlandRoutingModule } from './adminland-routing.module';
import { AdminlandComponent } from './adminland.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AdminlandComponent,
    AdminloginComponent
  ],
  imports: [
    CommonModule,
    AdminlandRoutingModule,
    SharedModule
  ]
})
export class AdminlandModule { }
