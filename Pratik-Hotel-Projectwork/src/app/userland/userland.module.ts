import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserlandRoutingModule } from './userland-routing.module';
import { UserlandComponent } from './userland.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UserlandComponent
  ],
  imports: [
    CommonModule,
    UserlandRoutingModule,
    SharedModule,
  ]
})
export class UserlandModule { }
