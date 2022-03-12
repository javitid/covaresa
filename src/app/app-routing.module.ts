import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'error',
    loadChildren: () => import('../modules/error/error.module').then(m => m.ErrorModule)
  },
  {
    path: '**',
    redirectTo: 'error/page-not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
