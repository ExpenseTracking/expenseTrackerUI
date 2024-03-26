import { Income } from "./income";

export const mockIncome: Income[] = [
    { source: "Job", amount: 100, date: new Date(2024, 2, 23), description: "Biweekly check", isDeleted: false },
    { source: "Rental property", amount: 200, date: new Date(2024, 2, 22), description: "Tenant payment", isDeleted: false },
    { source: "Real estate", amount: 300, date: new Date(2024, 2, 21), description: "New house sold", isDeleted: true },
    { source: "Investments", amount: 400, date: new Date(2024, 2, 20), description: "Stock investing", isDeleted: false },
    { source: "Business", amount: 500, date: new Date(2024, 2, 19), description: "Family owned business", isDeleted: false }
];