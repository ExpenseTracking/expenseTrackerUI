import { Income } from "../../Shared/models/income";

export const mockIncome: Income[] = [
    { source: "Job", amount: 100, date: new Date(2024, 2, 23), description: "Biweekly check" },
    { source: "Rental property", amount: 200, date: new Date(2024, 2, 22), description: "Tenant payment" },
    { source: "Real estate", amount: 300, date: new Date(2024, 2, 21), description: "New house sold" },
    { source: "Investments", amount: 400, date: new Date(2024, 2, 20), description: "Stock investing" },
    { source: "Business", amount: 500, date: new Date(2024, 2, 19), description: "Family owned business" }
];