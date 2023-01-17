import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page404Component } from 'src/app/module/view/authentication/page404/page404.component';
import { CategorieAddComponent } from './categorie-add/categorie-add.component';
import { CategorieEditComponent } from './categorie-edit/categorie-edit.component';
import { CategorieListComponent } from './categorie-list/categorie-list.component';
import { CategorieViewComponent } from './categorie-view/categorie-view.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: CategorieListComponent,
  },
  {
    path: 'add',
    component: CategorieAddComponent,
  },
  {
    path: 'edit',
    component: CategorieEditComponent,
  },
  {
    path: 'view',
    component: CategorieViewComponent,
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
export class CategorieRoutingModule {}