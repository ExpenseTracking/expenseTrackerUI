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
  showAdvancedDetails: boolean = false; // Flag to control visibility of advanced details section
  totalRetirementSavings: number = 0; // Total retirement savings
  targetRetirementSavingsNeeded: number = 0; // Target retirement savings needed

  // Constructor method to initialize the component
  constructor(private formBuilder: FormBuilder) {
    // Initialize the retirement form with form controls and validators
    this.retirementForm = this.formBuilder.group({
      age: ['', Validators.required], // Input for age with required validator
      annualPreTaxIncome: ['', Validators.required], // Input for annual pre-tax income with required validator
      currentRetirementSavings: ['', Validators.required], // Input for current retirement savings with required validator
      monthlyContribution: ['', Validators.required], // Input for monthly contribution with required validator
      monthlyRetirementBudget: ['', Validators.required], // Input for monthly retirement budget with required validator
      retirementAge: ['67', Validators.required], // Default retirement age
      lifeExpectancy: ['95', Validators.required], // Default life expectancy
      preRetirementRateOfReturn: ['6', Validators.required], // Default pre-retirement rate of return
      postRetirementRateOfReturn: ['5', Validators.required], // Default post-retirement rate of return
      inflationRate: ['3', Validators.required], // Default inflation rate
      annualIncomeIncrease: ['2', Validators.required] // Default annual income increase
    });
  }

  // Toggle advanced details section visibility
  toggleAdvancedDetails() {
    this.showAdvancedDetails = !this.showAdvancedDetails;
  }

  // Method to calculate retirement details
  calculateRetirement() {
    if (this.retirementForm.valid) {
      // Get form values
      const ageControl = this.retirementForm.get('age');
      const annualPreTaxIncomeControl = this.retirementForm.get('annualPreTaxIncome');
      const currentRetirementSavingsControl = this.retirementForm.get('currentRetirementSavings');
      const monthlyContributionControl = this.retirementForm.get('monthlyContribution');
      const monthlyRetirementBudgetControl = this.retirementForm.get('monthlyRetirementBudget');
      const retirementAgeControl = this.retirementForm.get('retirementAge');
      const lifeExpectancyControl = this.retirementForm.get('lifeExpectancy');
      const preRetirementRateOfReturnControl = this.retirementForm.get('preRetirementRateOfReturn');
      const postRetirementRateOfReturnControl = this.retirementForm.get('postRetirementRateOfReturn');
      const inflationRateControl = this.retirementForm.get('inflationRate');
      const annualIncomeIncreaseControl = this.retirementForm.get('annualIncomeIncrease');

      if (ageControl && annualPreTaxIncomeControl && currentRetirementSavingsControl && monthlyContributionControl && monthlyRetirementBudgetControl &&
        retirementAgeControl && lifeExpectancyControl && preRetirementRateOfReturnControl && postRetirementRateOfReturnControl && inflationRateControl && annualIncomeIncreaseControl
      ) {
        const age = ageControl.value;
        const annualPreTaxIncome = annualPreTaxIncomeControl.value;
        const currentRetirementSavings = currentRetirementSavingsControl.value;
        const monthlyContribution = monthlyContributionControl.value;
        const monthlyRetirementBudget = monthlyRetirementBudgetControl.value;

        // Default values for advanced details
        const retirementAge = retirementAgeControl.value;
        const lifeExpectancy = lifeExpectancyControl.value;
        const preRetirementRateOfReturn = preRetirementRateOfReturnControl.value / 100; // Convert percentage to decimal
        const postRetirementRateOfReturn = postRetirementRateOfReturnControl.value / 100; // Convert percentage to decimal
        const inflationRate = inflationRateControl.value / 100; // Convert percentage to decimal
        const annualIncomeIncrease = annualIncomeIncreaseControl.value / 100; // Convert percentage to decimal

        // Calculate years until retirement
        const yearsUntilRetirement = retirementAge - age;

        // Calculate total retirement savings once reached retirement age
        let totalRetirementSavings = currentRetirementSavings;
        for (let i = 0; i < yearsUntilRetirement; i++) {
          totalRetirementSavings += (monthlyContribution * 12); // Annual contribution
          totalRetirementSavings *= (1 + preRetirementRateOfReturn); // Compounded annually
          annualPreTaxIncomeControl.setValue(annualPreTaxIncome.value * (1 + annualIncomeIncrease)); // Increase annual income
        }

        // Store the updated value in the form control
        annualPreTaxIncomeControl.setValue(annualPreTaxIncome);

        let targetRetirementSavingsNeeded = totalRetirementSavings;
        // Calculate target retirement savings needed
        for (let i = 0; i < (lifeExpectancy - retirementAge); i++) {
          targetRetirementSavingsNeeded += (monthlyRetirementBudget * 12);
          targetRetirementSavingsNeeded -= (monthlyContribution * 12);
          targetRetirementSavingsNeeded *= (1 + postRetirementRateOfReturn);
        }

        targetRetirementSavingsNeeded /= Math.pow((1 + inflationRate), retirementAge - age); // Adjust for inflation

        // Store the results in component properties
        this.totalRetirementSavings = Number(totalRetirementSavings.toFixed(2));
        this.targetRetirementSavingsNeeded = Number(targetRetirementSavingsNeeded.toFixed(2));

        // Set the flag to show results
        this.showResults = true;
      }
    }
  }
}
