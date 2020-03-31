import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaypalComponent } from './views/paypal/paypal.component';

const routes: Routes = [
  {
    path:'',
    component:PaypalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
