import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../../environments/environment';
import { BaseComponent } from './base.component';

const routes: Routes = [{
  path: '',
  component: BaseComponent,
  children: [{
    path: 'dashboard',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: environment.mfe.mfe2Url,
      exposedModule: './DashboardModule'
    }).then(m => m.DashboardModule),
  },{
    path: 'user',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: environment.mfe.mfe2Url,
      exposedModule: './UserModule'
    }).then(m => m.UserModule),
  },{
    path:'**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path:'',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
