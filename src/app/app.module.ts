import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule} from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TransactionTypeComponent } from './Home/transaction-type/transaction-type.component';
import { CompanyHomePageComponent } from './Home/company-home-page/company-home-page.component';
import { CompanyNavbarComponent } from './Home/company-navbar/company-navbar.component';
import { CompanyFooterComponent } from './Home/company-footer/company-footer.component';
import { CompanyReviewsComponent } from './Home/company-reviews/company-reviews.component';
import { ServiceDashboardComponent } from './Home/service-dashboard/service-dashboard.component';
import { ServiceRevenueComponent } from './Home/service-revenue/service-revenue.component';
import { AboutPageComponent } from './Home/about-page/about-page.component';
import { FAQPageComponent } from './Home/faq-page/faq-page.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    TransactionTypeComponent,
    CompanyHomePageComponent,
    CompanyNavbarComponent,
    CompanyFooterComponent,
    CompanyReviewsComponent,
    ServiceDashboardComponent,
    ServiceRevenueComponent,
    AboutPageComponent,
    FAQPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTableModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
