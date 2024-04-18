import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyHomePageComponent } from './Home/company-home-page/company-home-page.component';
import { CompanyNavbarComponent } from './Home/company-navbar/company-navbar.component';
import { TransactionTypeComponent } from './Home/transaction-type/transaction-type.component';
import { CompanyReviewsComponent } from './Home/company-reviews/company-reviews.component';
import { ServiceDashboardComponent } from './Home/service-dashboard/service-dashboard.component';
import { ServiceRevenueComponent } from './Home/service-revenue/service-revenue.component';
import { AboutPageComponent } from './Home/about-page/about-page.component';
import { FAQPageComponent } from './Home/faq-page/faq-page.component';
import { DeleteRevenueDialogComponent } from './Home/service-revenue/delete-revenue-dialog/delete-revenue-dialog.component';
import { RetirementCalculatorComponent } from './Home/retirement-calculator/retirement-calculator.component';
import { ProfilePageComponent } from './Home/profile-page/profile-page.component';
import { GoalsComponent } from './Home/goals/goals.component';
import { LoginComponent } from './Home/login/login.component';
import { AuthGuard } from './Shared/auth.guard';
import { SignupComponent } from './Home/signup/signup.component';
import { FooterComponent } from './Home/footer/footer.component';

const routes: Routes = [
    { path: '', redirectTo: '/companyHome', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'companyHome', component: CompanyHomePageComponent},
    { path: 'companyNav', component: CompanyNavbarComponent},
    { path: 'footer', component: FooterComponent},
    { path: 'companyReviews', component: CompanyReviewsComponent},
    { path: 'transactionType', component: TransactionTypeComponent, canActivate: [AuthGuard]},
    { path: 'dashboard', component: ServiceDashboardComponent, canActivate: [AuthGuard]},
    { path: 'revenue', component: ServiceRevenueComponent, canActivate: [AuthGuard]},
    { path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuard]},
    { path: 'about', component: AboutPageComponent},
    { path: 'faqs', component: FAQPageComponent},
    { path: 'deleteRevenue', component: DeleteRevenueDialogComponent},
    { path: 'retirement', component: RetirementCalculatorComponent, canActivate: [AuthGuard]},
    { path: 'deleteRevenue', component: DeleteRevenueDialogComponent, canActivate: [AuthGuard]},
    { path: 'goals', component: GoalsComponent, canActivate: [AuthGuard]}
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
