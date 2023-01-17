import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from 'src/app/core/guard/auth.guard';
import {Role} from 'src/app/core/models/role';


const routes: Routes = [

      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        data: {
          role: Role.SuperAdmin,
        },
        loadChildren: () =>
          import('src/app/module/view/superadmin/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },      
{
        path: 'reservation',
        canActivate: [AuthGuard],
        data: {
          role: Role.SuperAdmin,
        },
        loadChildren: () =>
          import('src/app/module/view/superadmin/reservation/reservation-module').then((m) => m.ReservationModule),
      },

      
{
        path: 'chambre',
        canActivate: [AuthGuard],
        data: {
          role: Role.SuperAdmin,
        },
        loadChildren: () =>
          import('src/app/module/view/superadmin/chambre/chambre-module').then((m) => m.ChambreModule),
      },

      
{
        path: 'categorie',
        canActivate: [AuthGuard],
        data: {
          role: Role.SuperAdmin,
        },
        loadChildren: () =>
          import('src/app/module/view/superadmin/categorie/categorie-module').then((m) => m.CategorieModule),
      },

      
{
        path: 'client',
        canActivate: [AuthGuard],
        data: {
          role: Role.SuperAdmin,
        },
        loadChildren: () =>
          import('src/app/module/view/superadmin/client/client-module').then((m) => m.ClientModule),
      },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperAdminRoutingModule {}
