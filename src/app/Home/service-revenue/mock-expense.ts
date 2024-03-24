import { Expense } from "./expense";

export const mockExpense: Expense[] = [
    { type: "Transportation", amount: 10, date: new Date(2024, 2, 19), description: "Metro bus", isDeleted: false },
    { type: "Groceries", amount: 20, date: new Date(2024, 2, 20), description: "Walmart shopping", isDeleted: false },
    { type: "Subscription", amount: 30, date: new Date(2024, 2, 21), description: "Netfilx", isDeleted: true },
    { type: "Membership", amount: 40, date: new Date(2024, 2, 22), description: "Gym", isDeleted: false },
    { type: "Utilities", amount: 50, date: new Date(2024, 2, 23), description: "Water bill", isDeleted: true }
];