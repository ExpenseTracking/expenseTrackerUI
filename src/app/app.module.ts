import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { DatePipe } from '@angular/common';
import { MatIconButton } from '@angular/material/button';
import { MatPaginator } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardContent, MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from "@angular/material/sidenav";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TransactionTypeComponent } from './Home/transaction-type/transaction-type.component';
import { CompanyHomePageComponent } from './Home/company-home-page/company-home-page.component';
import { CompanyReviewsComponent } from './Home/company-reviews/company-reviews.component';
import { ServiceDashboardComponent } from './Home/service-dashboard/service-dashboard.component';
import { ServiceRevenueComponent } from './Home/service-revenue/service-revenue.component';
import { AboutPageComponent } from './Home/about-page/about-page.component';
import { FAQPageComponent } from './Home/faq-page/faq-page.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DeleteRevenueDialogComponent } from './Home/service-revenue/delete-revenue-dialog/delete-revenue-dialog.component';
import { RetirementCalculatorComponent } from './Home/retirement-calculator/retirement-calculator.component';
import { IncomeComponent } from './Home/service-revenue/income/income.component';
import { ExpenseComponent } from './Home/service-revenue/expense/expense.component';
import { AddIncomeDialogComponent } from './Home/service-revenue/add-income-dialog/add-income-dialog.component';
import { AddExpenseDialogComponent } from './Home/service-revenue/add-expense-dialog/add-expense-dialog.component';
import { EditIncomeDialogComponent } from './Home/service-revenue/edit-income-dialog/edit-income-dialog.component';
import { EditExpenseDialogComponent } from './Home/service-revenue/edit-expense-dialog/edit-expense-dialog.component';
import { AddTransactionTypeDialogComponent } from './Home/transaction-type/add-transaction-type-dialog/add-transaction-type-dialog.component';
import { DeleteTransactionTypeDialogComponent } from './Home/transaction-type/delete-transaction-type-dialog/delete-transaction-type-dialog.component';
import { EditTransactionTypeDialogComponent } from './Home/transaction-type/edit-transaction-type-dialog/edit-transaction-type-dialog.component';
import { GoalsComponent } from './Home/goals/goals.component';
import { DeleteGoalDialogComponent } from './Home/goals/delete-goal-dialog/delete-goal-dialog.component';
import { EditGoalDialogComponent } from './Home/goals/edit-goal-dialog/edit-goal-dialog.component';
import { CreateGoalDialogComponent } from './Home/goals/create-goal-dialog/create-goal-dialog.component';
import { LoginComponent } from './Home/login/login.component';
import { SignupComponent } from './Home/signup/signup.component';
import { FooterComponent } from './Home/footer/footer.component';
import { NavbarComponent } from './Home/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionTypeComponent,
    CompanyHomePageComponent,
    FooterComponent,
    CompanyReviewsComponent,
    ServiceDashboardComponent,
    ServiceRevenueComponent,
    AboutPageComponent,
    FAQPageComponent,
    DeleteRevenueDialogComponent,
    RetirementCalculatorComponent,

    IncomeComponent,
    ExpenseComponent,
    AddIncomeDialogComponent,
    AddExpenseDialogComponent,
    EditIncomeDialogComponent,
    EditExpenseDialogComponent,
    AddTransactionTypeDialogComponent,
    DeleteTransactionTypeDialogComponent,
    EditTransactionTypeDialogComponent,
    GoalsComponent,
    DeleteGoalDialogComponent,
    EditGoalDialogComponent,
    CreateGoalDialogComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatIconButton,
    MatPaginator,
    MatCardModule,
    MatCardContent,
    MatDividerModule,
    MatListModule,
    ReactiveFormsModule,
    MatSidenavModule
  ],
  providers: [
    provideAnimationsAsync(),
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }