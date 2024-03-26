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
}