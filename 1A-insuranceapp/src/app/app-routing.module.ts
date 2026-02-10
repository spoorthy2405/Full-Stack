import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateInsuranceComponent } from './components/create-insurance/create-insurance';
import { ListInsuranceComponent } from './components/list-insurance/list-insurance';
import { ViewInsuranceComponent } from './components/view-insurance/view-insurance';

import { UpdateInsuranceComponent } from './components/update-insurance/update-insurance';
import { DeleteInsuranceComponent } from './components/delete-insurance/delete-insurance';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'create', component: CreateInsuranceComponent },
  { path: 'list', component: ListInsuranceComponent },
  { path: 'view/:id', component: ViewInsuranceComponent },
  { path: 'update/:id', component: UpdateInsuranceComponent },
  { path: 'delete/:id', component: DeleteInsuranceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
