import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../Shared/app.service';
import { Income, Expense, user } from '../../Shared/models';
import { AuthService } from '../../Shared/auth.service';

@Component({
    selector: 'app-service-dashboard',
    templateUrl: './service-dashboard.component.html',
    styleUrl: './service-dashboard.component.css'
})
export class ServiceDashboardComponent implements OnInit {

    // income, expense, and user data storage
    expense: Expense[] = [];
    income: Income[] = [];
    user: user;

    constructor(private apiService: ApiService, private authService: AuthService) {
        // get user info
        this.user = authService.getUser();
    }

    // to hold totals
    totalIncome: number = 0;
    totalExpenses: number = 0;

    ngOnInit() {
        // get income
        this.apiService.getIncomeByUserId(this.user.userId).subscribe((incomeData: Income[]) => {
            this.income = incomeData;

            // get income total
            for (let i of this.income) {
                this.totalIncome += i.amount;
            }
        });

        // get expenses
        this.apiService.getExpenseByUserId(this.user.userId).subscribe((expenseData: Expense[]) => {
            this.expense = expenseData;

            // get expense total
            for (let e of this.expense) {
                this.totalExpenses += e.amount;
            }
        });
    };
}
