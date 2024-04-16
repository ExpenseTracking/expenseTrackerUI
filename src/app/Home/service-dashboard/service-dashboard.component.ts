import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../Shared/app.service';
import { Income, Expense, user } from '../../Shared/models';

@Component({
    selector: 'app-service-dashboard',
    templateUrl: './service-dashboard.component.html',
    styleUrl: './service-dashboard.component.css'
})
export class ServiceDashboardComponent implements OnInit {
    constructor(private apiService: ApiService) { }

    // income, expense, and user data storage
    expense: Expense[] = [];
    income: Income[] = [];
    user: user[] = [];

    // to hold totals
    totalIncome: number = 0;
    totalExpenses: number = 0;

    ngOnInit() {
        // get user info
        this.apiService.getUserByUserId(3).subscribe((userData: user[]) => {
            this.user = userData;

            // check if user data is available
            if (this.user.length > 0) {
                // get income
                this.apiService.getIncomeByUserId(this.user[0]['userId']).subscribe((incomeData: Income[]) => {
                    this.income = incomeData;

                    // get income total
                    for (let i of this.income) {
                        this.totalIncome += i.amount;
                    }
                });

                // get expenses
                this.apiService.getExpenseByUserId(this.user[0]['userId']).subscribe((expenseData: Expense[]) => {
                    this.expense = expenseData;

                    // get expense total
                    for (let e of this.expense) {
                        this.totalExpenses += e.amount;
                    }
                });
            }
        });
    }
}
