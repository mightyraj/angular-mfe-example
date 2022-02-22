import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MfefeatureComponent } from './mfefeature.component';

const routes: Routes = [{
  path: '',
  component: MfefeatureComponent,
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MfefeatureRoutingModule { }
