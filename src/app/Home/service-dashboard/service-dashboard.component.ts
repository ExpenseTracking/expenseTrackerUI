import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../Shared/app.service';
import { Income, Expense } from '../../Shared/models';

@Component({
    selector: 'app-service-dashboard',
    templateUrl: './service-dashboard.component.html',
    styleUrl: './service-dashboard.component.css'
})
export class ServiceDashboardComponent implements OnInit {
    constructor(private apiService: ApiService) { }

    // income and expense data storage
    expense: Expense[] = [];
    income: Income[] = [];

    // to hold totals
    totalIncome: number = 0;
    totalExpenses: number = 0;

    ngOnInit() {
        // get income
        this.apiService.getIncomeByUserId(3).subscribe((data: Income[]) => {
            this.income = data;

            // get income total
            for (let i of this.income) {
                this.totalIncome += i.amount;
            }
        })

        // get expenses
        this.apiService.getExpenseByUserId(3).subscribe((data: Expense[]) => {
            this.expense = data;

            // get expense total
            for (let e of this.expense) {
                this.totalExpenses += e.amount;
            }
        })
    }
}
