import BillCard from "./billCard";
import { BillContext } from "../submitForms/billsFunctions/billContext";
import { useSelector } from "react-redux";
import type { RootState } from "../../state management/store";
import type { DataBaseBill } from "./billInterface";
import { useState, useEffect} from "react";

// const recurringBills: RecurringBill[] = [

export default function BillsContainer() {

const checkUpdate = useSelector((state: RootState) => state.updateApp.updateApp);

  const [theme, setStatusTheme] = useState("active");
  const [headerColor, setHeaderColor] = useState("lime")
  const [bills, setBills] = useState<DataBaseBill[]>([])

  function setTheme(theme: string) {setStatusTheme(theme);}

  useEffect(()=>{
    if( theme === "active"){
      setHeaderColor("lime")
    }
    else if(theme === "pause"){
      setHeaderColor("hsl(37 100% 49.5%)")
    }
    else if(theme === "inactive"){
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
          <BillContext.Provider value={{ statusTheme: theme, headColor: headerColor, setTheme}}>

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
              />
            ))
          }
        </BillContext.Provider>
        </div>
    )
}