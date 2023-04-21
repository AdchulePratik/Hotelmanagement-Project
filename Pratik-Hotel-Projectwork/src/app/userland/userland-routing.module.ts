import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlandComponent } from './userland.component';

const routes: Routes = [{ path: '', component: UserlandComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserlandRoutingModule { }
