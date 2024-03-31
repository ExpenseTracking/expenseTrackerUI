import { Expense } from "../../Shared/models/expense";

export const mockExpense: Expense[] = [
    { type: "Transportation", amount: 10, date: new Date(2024, 2, 19), description: "Metro bus" },
    { type: "Groceries", amount: 20, date: new Date(2024, 2, 20), description: "Walmart shopping" },
    { type: "Subscription", amount: 30, date: new Date(2024, 2, 21), description: "Netfilx" },
    { type: "Membership", amount: 40, date: new Date(2024, 2, 22), description: "Gym" },
    { type: "Utilities", amount: 50, date: new Date(2024, 2, 23), description: "Water bill" }
];