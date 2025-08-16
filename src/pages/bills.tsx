import BalanceContainer from "../components/ui/balanceContainer";
import PageHeader from "../components/ui/pageHeader";
import BillsContainer from "../components/bills/billsContainer";
import { useDispatch } from "react-redux";
import { onOffSubmit } from "../state management/openSubmition";
import { settingSelected } from "../state management/selectSubmit";
import { useState, useEffect } from "react";

export default function Bills() {

  const dispatch = useDispatch()

  const [paidBills, setPaidBills] = useState(0);
  const [dueBills, setDueBills] = useState(0);
  const [upcoming, setUpcoming] = useState(0);

  useEffect(() => {
    const data = localStorage.getItem("currentUser");

    if (data) {
      const user = JSON.parse(data);

      setPaidBills(user.paidBills);
      setDueBills(user.billsDue);
      setUpcoming(user.upcomingBills);
    }
  }, []);

  return (
    <main className="m-2 p-4 w-screen h-screen overflow-y-auto">
      <PageHeader title="Recurring Bills" />
      <div className="flex flex-row flex-wrap justify-start">
        <BalanceContainer title="Paid Bills" amount={paidBills} />
        <BalanceContainer title="Bills Due" amount={dueBills} />
        <BalanceContainer title="Upcoming Bills" amount={upcoming} />
        <button 
        className="text-xs m-2 p-2"
        onClick={()=>{
          dispatch(settingSelected("bills"))
          dispatch(onOffSubmit())
        }}
        >Add a bill</button>
      </div>

      <div className="flex flex-row w-screen h-auto overflow-y-auto">
        <BillsContainer />
      </div>
    </main>
  );
}
