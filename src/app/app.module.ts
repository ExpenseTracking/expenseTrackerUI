import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule} from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule} from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { DatePipe } from '@angular/common';
import { MatIconButton } from '@angular/material/button';

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
import { DeleteRevenueDialogComponent } from './Home/service-revenue/delete-revenue-dialog/delete-revenue-dialog.component';
import { AddNewRevenueDialogComponent } from './Home/service-revenue/add-new-revenue-dialog/add-new-revenue-dialog.component';

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
    FAQPageComponent,
    DeleteRevenueDialogComponent,
    AddNewRevenueDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatMenuModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatGridListModule,
    MatIconButton
  ],
  providers: [
    provideAnimationsAsync(),
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
