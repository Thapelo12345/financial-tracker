import BillCard from "./billCard";
import { useState, useEffect } from "react";

// type RecurringBill = {
//   name: string;
//   amount: number;
//   dueDate: string;
//   frequency: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'custom';
//   startDate: string;
//   category: string;
//   status: 'active' | 'paused' | 'cancelled' | 'inactive';
//   autoPay: boolean;
//   paymentMethod: string;
//   reminderDaysBefore: number;
// };

interface bill {
  name: string;
  amount: number;
  dueDate: string;
  frequency: string;
  startDate: string;
  category: string;
  status: string;
  autoPay: boolean;
  paymentMethod: string;
  reminderDaysBefore: number;
}

// const recurringBills: RecurringBill[] = [
//   {
//  name: "Netflix",
//     amount: 100.0,
//     dueDate: "2025-08-15",
//     frequency: "monthly",
//     startDate: "2024-01-15",
//     category: "Entertainment",
//     status: "inactive",
//     autoPay: true,
//     paymentMethod: "Credit Card",
//     reminderDaysBefore: 3
//   },
//   {
//     name: "Spotify",
//     amount: 59.99,
//     dueDate: "2025-08-12",
//     frequency: "monthly",
//     startDate: "2024-02-01",
//     category: "Music",
//     status: "active",
//     autoPay: true,
//     paymentMethod: "Debit Card",
//     reminderDaysBefore: 2
//   },
//   {
//     name: "Adobe Creative Cloud",
//     amount: 299.0,
//     dueDate: "2025-08-10",
//     frequency: "monthly",
//     startDate: "2024-03-05",
//     category: "Software",
//     status: "inactive",
//     autoPay: false,
//     paymentMethod: "PayPal",
//     reminderDaysBefore: 5
//   },
//   {
//     name: "MTN Fibre Internet",
//     amount: 499.99,
//     dueDate: "2025-08-05",
//     frequency: "monthly",
//     startDate: "2024-01-01",
//     category: "Utilities",
//     status: "active",
//     autoPay: true,
//     paymentMethod: "Bank Transfer",
//     reminderDaysBefore: 7
//   },
//   {
//     name: "DStv Premium",
//     amount: 879.0,
//     dueDate: "2025-08-20",
//     frequency: "monthly",
//     startDate: "2024-01-20",
//     category: "Entertainment",
//     status: "active",
//     autoPay: false,
//     paymentMethod: "Credit Card",
//     reminderDaysBefore: 1
//   },
//   {
//     name: "Apple iCloud Storage",
//     amount: 45.0,
//     dueDate: "2025-08-25",
//     frequency: "monthly",
//     startDate: "2024-05-01",
//     category: "Cloud Services",
//     status: "inactive",
//     autoPay: true,
//     paymentMethod: "Debit Card",
//     reminderDaysBefore: 3
//   },
//   {
//     name: "Canva Pro",
//     amount: 129.99,
//     dueDate: "2025-08-18",
//     frequency: "monthly",
//     startDate: "2024-04-10",
//     category: "Design",
//     status: "active",
//     autoPay: false,
//     paymentMethod: "Credit Card",
//     reminderDaysBefore: 4
//   }
// ];

export default function BillsContainer() {

  const [bills, setBills] = useState<bill[]>([])

  useEffect(()=>{
    const data = localStorage.getItem("currentUser")

    if(data){
      const user = JSON.parse(data)

      setBills(user.recurringBills)
    }
  },[])


    return(
        <div className="flex flex-row flex-wrap justify-start w-[90%] h-[80%]">
          {
            bills.map((bill) => (
              <BillCard
                key={bill.name}
                Name={bill.name}
                Amount={bill.amount}
                DueDate={bill.dueDate}
                Frequency={bill.frequency}
                StartDate={bill.startDate}
                Category={bill.category}
                Status={bill.status}
                AutoPay={bill.autoPay}
                PaymentMethod={bill.paymentMethod}
                ReminderDaysBefore={bill.reminderDaysBefore}
              />
            ))
          }
        </div>
    )
}