import BillCard from "./billCard";
import { BillContext } from "../submitForms/billsFunctions/billContext";
import { useState, useEffect} from "react";

/*
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
*/
// const recurringBills: RecurringBill[] = [


export default function BillsContainer() {
  const [theme, setStatusTheme] = useState("active");
  const [backgroundColor, setBackGroundColor] = useState("hsl(112 100% 96.2%)")
  const [headerColor, setHeaderColor] = useState("hsl(142, 76%, 54%)")

  function setTheme(theme: string) {
    setStatusTheme(theme);
  }

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
  /*
  const [bills, setBills] = useState<Bill[]>([])

  useEffect(()=>{
    const data = sessionStorage.getItem("currentUser")

    if(data){
      const user = JSON.parse(data)

      setBills(user.recurringBills)
    }
  },[])
  */

    return(
      <div className="flex flex-row flex-wrap justify-start w-[90%] h-[80%]">
          <BillContext.Provider value={{ statusTheme: theme, backGround: backgroundColor, headColor: headerColor, setTheme}}>

          <BillCard />
          {/* {
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
          } */}
        </BillContext.Provider>
        </div>
    )
}