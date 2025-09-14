import BalanceContainer from "../components/ui/balanceContainer";
import PageHeader from "../components/ui/pageHeader";
import BillsContainer from "../components/bills/billsContainer";
import { useDispatch } from "react-redux";
import { onOffSubmit } from "../state management/openSubmition";
import { settingSelected } from "../state management/selectSubmit";
import { useState, useEffect } from "react";
import AddItemBtn from "../components/ui/addItemBtn";

export default function Bills() {

  const dispatch = useDispatch()

  const [paidBills, setPaidBills] = useState(0);
  const [dueBills, setDueBills] = useState(0);
  const [upcoming, setUpcoming] = useState(0);

  const addBill = () => {
    dispatch(settingSelected("bills"))
    dispatch(onOffSubmit())
  }

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
    <main className="m-2 p-4 pb-15 md:pb-4 w-screen h-screen overflow-y-auto">
      <PageHeader title="Recurring Bills" />
      <div className="flex flex-row flex-wrap justify-start">
        <BalanceContainer activeClick={false} title="Paid Bills" amount={paidBills} />
        <BalanceContainer activeClick={false} title="Bills Due" amount={dueBills} />
        <BalanceContainer activeClick={false} title="Upcoming Bills" amount={upcoming} />
       
<AddItemBtn tipText="Add a Bill" btnFunction={addBill} />
      
      </div>

      <div className="flex flex-row w-screen h-auto overflow-y-auto">
        <BillsContainer />
      </div>
    </main>
  );
}
