import { Component } from '@angular/core';
import { mockIncome } from './mock-income';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-service-revenue',
  templateUrl: './service-revenue.component.html',
  styleUrl: './service-revenue.component.css'
})
export class ServiceRevenueComponent {
    income = mockIncome;
}
