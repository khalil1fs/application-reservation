import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page404Component } from 'src/app/module/view/authentication/page404/page404.component';
import { ChambreAddComponent } from './chambre-add/chambre-add.component';
import { ChambreEditComponent } from './chambre-edit/chambre-edit.component';
import { ChambreListComponent } from './chambre-list/chambre-list.component';
import { ChambreViewComponent } from './chambre-view/chambre-view.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: ChambreListComponent,
  },
  {
    path: 'add',
    component: ChambreAddComponent,
  },
  {
    path: 'edit',
    component: ChambreEditComponent,
  },
  {
    path: 'view',
    component: ChambreViewComponent,
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
export class ChambreRoutingModule {}