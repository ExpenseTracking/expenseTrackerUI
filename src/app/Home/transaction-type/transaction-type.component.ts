import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../Shared/app.service';
import { messages, transactionType } from "../../Shared/models"

@Component({
  selector: 'app-transaction-type',
  templateUrl: './transaction-type.component.html',
  styleUrl: './transaction-type.component.css'
})
export class TransactionTypeComponent implements OnInit {
  displayColumns: string[] = ['transactionTypeId', 'userId', 'transactionTypeName'];
  transactionTypes: transactionType[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getTransactionType().subscribe((data: transactionType[]) => {
      this.transactionTypes = data;
    })
  }
}
