import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../enviornments/enviornment";

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    constructor(private http: HttpClient) {}
    
    apiUrl = environment.api_url;

    //// Transaction Type API Calls ////
    getTransactionType(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/TransactionType`);
    }

    getTransactionTypeById(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/TransactionType/${id}`);
    }

    addTransactionType(transactionType: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/TransactionType`, transactionType);
    }

    updateTransactionType(id: number, transactionType: any): Observable<any> {
        return this.http.put<any>(`${this.apiUrl}/TransactionType/${id}`, transactionType);
    }

    deleteTransactionType(id: number): Observable<any> {
        return this.http.delete<any>(`${this.apiUrl}/TransactionType/${id}`);
    }
    //// Transaction Type API Calls ////


    //// income API Calls ////
    getIncome(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/Income`);
    }

    getIncomeByUserId(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/Income/${id}`);
    }

    addIncome(income: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/Income`, income);
    }

    updateIncome(id: number, income: any): Observable<any> {
        return this.http.put<any>(`${this.apiUrl}/Income/${id}`, income);
    }

    deleteIncome(id: number): Observable<any> {
        return this.http.delete<any>(`${this.apiUrl}/Income/${id}`);
    }
    //// income API Calls ////


    //// expense API Calls ////
    getExpense(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/Expense`);
    }

    getExpenseByUserId(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/Expense/${id}`);
    }

    addExpense(expense: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/Expense`, expense);
    }

    updateExpense(id: number, expense: any): Observable<any> {
        return this.http.put<any>(`${this.apiUrl}/Expense/${id}`, expense);
    }

    deleteExpense(id: number): Observable<any> {
        return this.http.delete<any>(`${this.apiUrl}/Expense/${id}`);
    }
    //// expense API Calls ////


    //// Income source API Calls ////
    getIncomeSource(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/IncomeSource`);
    }

    getIncomeSourceById(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/IncomeSource/${id}`);
    }

    addIncomeSource(transactionType: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/IncomeSource`, transactionType);
    }

    updateIncomeSource(id: number, transactionType: any): Observable<any> {
        return this.http.put<any>(`${this.apiUrl}/IncomeSource/${id}`, transactionType);
    }

    deleteIncomeSource(id: number): Observable<any> {
        return this.http.delete<any>(`${this.apiUrl}/IncomeSource/${id}`);
    }
    //// Income source API Calls ////

    //// User API Calls ////
    getUsers(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/User`);
    }

    getUserByUserId(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/User/${id}`);
    }

    addUser(transactionType: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/User`, transactionType);
    }

    updateUser(id: number, transactionType: any): Observable<any> {
        return this.http.put<any>(`${this.apiUrl}/User/${id}`, transactionType);
    }

    deleteUser(id: number): Observable<any> {
        return this.http.delete<any>(`${this.apiUrl}/User/${id}`);
    }
    //// User API Calls ////
}