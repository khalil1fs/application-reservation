import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page404Component } from 'src/app/module/view/authentication/page404/page404.component';
import { ReservationAddComponent } from './reservation-add/reservation-add.component';
import { ReservationEditComponent } from './reservation-edit/reservation-edit.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationViewComponent } from './reservation-view/reservation-view.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: ReservationListComponent,
  },
  {
    path: 'add',
    component: ReservationAddComponent,
  },
  {
    path: 'edit',
    component: ReservationEditComponent,
  },
  {
    path: 'view',
    component: ReservationViewComponent,
  },
  { 
    path: '**', 
    component: Page404Component,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationRoutingModule {}