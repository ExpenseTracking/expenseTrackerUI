import { Component } from '@angular/core';
import { mockIncome } from './mock-income';
import { mockExpense } from './mock-expense';

@Component({
    selector: 'app-service-revenue',
    templateUrl: './service-revenue.component.html',
    styleUrl: './service-revenue.component.css'
})
export class ServiceRevenueComponent {
    incomeColumns: string[] = ['source', 'amount', 'date', 'description', 'buttons'];
    expenseColumns: string[] = ['type', 'amount', 'date', 'description', 'buttons'];
    // dummy data arrays
    income = mockIncome;
    expense = mockExpense;

    // open/close functions to add a new income
    openIncomeModal() {
        const incomeModalDiv = document.getElementById('newIncomeModal');
        if (incomeModalDiv != null) {
            incomeModalDiv.style.display = 'block';
        }
    }

    closeIncomeModal() {
        const incomeModalDiv = document.getElementById('newIncomeModal');
        if (incomeModalDiv != null) {
            incomeModalDiv.style.display = 'none';
        }
    }

    // open/close functions to add a new expense
    openExpenseModal() {
        const incomeModalDiv = document.getElementById('newExpenseModal');
        if (incomeModalDiv != null) {
            incomeModalDiv.style.display = 'block';
        }
    }

    closeExpenseModal() {
        const incomeModalDiv = document.getElementById('newExpenseModal');
        if (incomeModalDiv != null) {
            incomeModalDiv.style.display = 'none';
        }
    }
}
