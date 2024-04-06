// Import necessary modules from Angular
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-retirement-calculator',
  templateUrl: './retirement-calculator.component.html',
  styleUrls: ['./retirement-calculator.component.css']
})
export class RetirementCalculatorComponent {
  // Class properties
  retirementForm: FormGroup; // Form group for retirement inputs
  showResults: boolean = false; // Flag to control visibility of results
  totalSavingsNeeded: number = 0; // Total savings needed for retirement
  yearsUntilRetirement: number = 0; // Number of years until retirement

  // Constructor method to initialize the component
  constructor(private formBuilder: FormBuilder) {
    // Initialize the retirement form with form controls and validators
    this.retirementForm = this.formBuilder.group({
      currentAge: ['', Validators.required], // Input for current age with required validator
      retirementAge: ['', Validators.required], // Input for retirement age with required validator
      annualIncome: ['', Validators.required], // Input for annual income with required validator
      savings: ['', Validators.required] // Input for current savings with required validator
    });
  }

  // Method to calculate retirement details
  calculateRetirement() {

    // TODO
    if (this.retirementForm.valid) {
      const currentAge = this.retirementForm.value.currentAge;
      const retirementAge = this.retirementForm.value.retirementAge;
      const annualIncome = this.retirementForm.value.annualIncome;
      const savings = this.retirementForm.value.savings;

  
      this.totalSavingsNeeded = 0;
      this.yearsUntilRetirement = 0
      this.showResults = true;
    }
  }
}
