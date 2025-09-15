import BillCard from "./billCard";
import { BillContext } from "../submitForms/billsFunctions/billContext";
import { useSelector } from "react-redux";
import type { RootState } from "../../state management/store";
import { useState, useEffect} from "react";

interface Bill {
  id: number;
  title: string;
  description: string;
  amount: number;
  startDate: string;
  dueDate: string;
  endDate: string;
  category: string;
  duration: string;
  frenquently: string;
  status: string;
  autoPay: boolean;
  settledBill: boolean;
  daysLeft: number;
}
// const recurringBills: RecurringBill[] = [

export default function BillsContainer() {

const checkUpdate = useSelector((state: RootState) => state.updateApp.updateApp);

  const [theme, setStatusTheme] = useState("active");
  const [backgroundColor, setBackGroundColor] = useState("hsl(112 100% 96.2%)")
  const [headerColor, setHeaderColor] = useState("hsl(142, 76%, 54%)")
  const [bills, setBills] = useState<Bill[]>([])

  function setTheme(theme: string) {setStatusTheme(theme);}

  useEffect(()=>{
    if( theme === "active"){
      setBackGroundColor("hsl(112 100% 96.2%)")
      setHeaderColor("hsl(142, 76%, 54%)")
    }
    else if(theme === "pause"){
      setBackGroundColor("hsl(35 99.1% 92.8%)")
      setHeaderColor("hsl(33 100% 63%)")
    }
    else if(theme === "inactive"){
      setBackGroundColor("hsl(180 0% 70.8%)")
      setHeaderColor("hsl(33 0% 39%)")
    }

  }, [theme])

  useEffect(()=>{
    const data = sessionStorage.getItem("currentUser")

    if(data){
      const user = JSON.parse(data)
      setBills(user.recurringBills)
    }
  },[checkUpdate])

    return(
      <div className="flex flex-row flex-wrap justify-start w-[90%] h-[80%]">
          <BillContext.Provider value={{ statusTheme: theme, backGround: backgroundColor, headColor: headerColor, setTheme}}>

          {
            bills.map((bill) => (
              <BillCard
                key={bill.id}
                billId ={bill.id}
                title={bill.title}
                amount={bill.amount}
                description={bill.description}
                startDate={bill.startDate}
                dueDate={bill.dueDate}
                endDate={bill.endDate}
                category={bill.category}
                duration={bill.duration}
                frenquently={bill.frenquently}
                status={bill.status}
                AutoPay={bill.autoPay}
                settleBill={bill.settledBill}
                days={bill.daysLeft}
              />
            ))
          }
        </BillContext.Provider>
        </div>
    )
}