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

/* 
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
  */

interface Bill {
  id: number;
  title: string;
  description: string;
  amount: number;
  startDate: string;
  category: string;
  duration: string;
  frenquently: string;
  status: string;
  paymentBeforeType:string
  paymentBeforeValue:string | number
}

// const recurringBills: RecurringBill[] = [

export default function BillsContainer() {

  const [bills, setBills] = useState<Bill[]>([])

  useEffect(()=>{
    const data = sessionStorage.getItem("currentUser")

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
                key={bill.title}
                title={bill.title}
                amount={bill.amount}
                // DueDate={bill.dueDate}
                frenquently={bill.frenquently}
                startDate={bill.startDate}
                category={bill.category}
                status={bill.status}
                paymentBeforeValue={bill.paymentBeforeValue}
              />
            ))
          }
        </div>
    )
}