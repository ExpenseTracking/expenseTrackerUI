import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyHomePageComponent } from './Home/company-home-page/company-home-page.component';
import { CompanyNavbarComponent } from './Home/company-navbar/company-navbar.component';
import { CompanyFooterComponent } from './Home/company-footer/company-footer.component';
import { TransactionTypeComponent } from './Home/transaction-type/transaction-type.component';
import { CompanyReviewsComponent } from './Home/company-reviews/company-reviews.component';
import { ServiceDashboardComponent } from './Home/service-dashboard/service-dashboard.component';
import { ServiceRevenueComponent } from './Home/service-revenue/service-revenue.component';
import { AboutPageComponent } from './Home/about-page/about-page.component';
import { FAQPageComponent } from './Home/faq-page/faq-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/companyHome', pathMatch: 'full' },
    { path: 'companyHome', component: CompanyHomePageComponent},
    { path: 'companyNav', component: CompanyNavbarComponent},
    { path: 'companyFooter', component: CompanyFooterComponent},
    { path: 'companyReviews', component: CompanyReviewsComponent},
    { path: 'transactionType', component: TransactionTypeComponent }
    { path: 'dashboard', component: ServiceDashboardComponent},
    { path: 'revenue', component: ServiceRevenueComponent},
    { path: 'transactionType', component: TransactionTypeComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'faqs', component: FAQPageComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
