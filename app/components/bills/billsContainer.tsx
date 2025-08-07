"use client"

type RecurringBill = {
  name: string;
  amount: number;
  dueDate: string;
  frequency: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'custom';
  startDate: string;
  category: string;
  status: 'active' | 'paused' | 'cancelled';
  autoPay: boolean;
  paymentMethod: string;
  reminderDaysBefore: number;
};

const recurringBills: RecurringBill[] = [
  {
    name: "Netflix",
    amount: 100.00,
    dueDate: "2025-08-15",
    frequency: "monthly",
    startDate: "2024-01-15",
    category: "Entertainment",
    status: "active",
    autoPay: true,
    paymentMethod: "Credit Card",
    reminderDaysBefore: 3
  }
];


export default function BillsContainer() {
    return(
        <ul>
        </ul>
    )
}