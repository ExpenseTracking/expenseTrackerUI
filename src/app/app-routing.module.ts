import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyHomePageComponent } from './Home/company-home-page/company-home-page.component';
import { CompanyNavbarComponent } from './Home/company-navbar/company-navbar.component';
import { CompanyFooterComponent } from './Home/company-footer/company-footer.component';
import { TransactionTypeComponent } from './Home/transaction-type/transaction-type.component';
import { ServiceDashboardComponent } from './Home/service-dashboard/service-dashboard.component';
import { FAQPageComponent } from './Home/faq-page/faq-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/companyHome', pathMatch: 'full' },
    { path: 'companyHome', component: CompanyHomePageComponent},
    { path: 'companyNav', component: CompanyNavbarComponent},
    { path: 'companyFooter', component: CompanyFooterComponent},
    { path: 'dashboard', component: ServiceDashboardComponent},
    { path: 'transactionType', component: TransactionTypeComponent },
    { path: 'faqs', component: FAQPageComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
