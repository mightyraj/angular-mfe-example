import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
//   {
//   path: 'home',
//   component: HomeComponent,
//   pathMatch: 'full'
// },
{
  path: 'login',
  loadChildren: () => loadRemoteModule({
    type: 'module',
    remoteEntry: environment.mfe.mfe1Url,
    exposedModule: './LoginModule'
  }).then(m => m.LoginModule),
},
{
  path: 'base',
  canActivate: [AuthGuard],
  loadChildren: () => import("./base/base.module").then((m) => m.BaseModule),
},
// {
//   path: 'mfe1',
//   canActivate: [AuthGuard],
//   loadChildren: () => loadRemoteModule({
//     type: 'module',
//     remoteEntry: environment.mfe.mfe1Url,
//     // remoteName: 'mfe1',
//     exposedModule: './MfefeatureModule'
//   }).then(m => m.MfefeatureModule)
// },
{
  path: '',
  redirectTo: 'login',
  pathMatch:'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
