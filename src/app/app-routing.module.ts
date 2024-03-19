import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TransactionTypeComponent } from './transaction-type/transaction-type.component';

const routes: Routes = [
    { path: '', redirectTo: '/appHome', pathMatch: 'full' },
    { path: 'appHome', component: AppComponent },
    { path: 'transactionType', component: TransactionTypeComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
