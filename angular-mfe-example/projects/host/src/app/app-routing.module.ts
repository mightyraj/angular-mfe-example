import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  pathMatch: 'full'
},
// {
//   path: 'mfe1',
//   loadChildren: () =>
//     import('mfe1/MfefeatureModule').then((m) => {
//       return m.MfefeatureModule;
//     }),
// }
{
  path: 'mfe1',
  canActivate: [AuthGuard],
  loadChildren: () => loadRemoteModule({
    type: 'module',
    remoteEntry: environment.mfe.mfe1Url,
    // remoteName: 'mfe1',
    exposedModule: './MfefeatureModule'
  }).then(m => m.MfefeatureModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
