import BalanceContainer from "../components/ui/balanceContainer";
import PageHeader from "../components/ui/pageHeader";
import BillsContainer from "../components/bills/billsContainer";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
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
        <BalanceContainer activeClick={false} title="Paid Bills" amount={paidBills} />
        <BalanceContainer activeClick={false} title="Bills Due" amount={dueBills} />
        <BalanceContainer activeClick={false} title="Upcoming Bills" amount={upcoming} />
        {/* <button 
        className="text-xs m-2 p-2"
        onClick={()=>{
          dispatch(settingSelected("bills"))
          dispatch(onOffSubmit())
        }}
        >Add a bill</button> */}

        <button 
          className="group relative group w-15 h-15 m-2 p-2"
          onClick={()=>{
          dispatch(settingSelected("bills"))
          dispatch(onOffSubmit())
        }}
        >
          <PlusCircleIcon className="w-10 h-10 text-green-400" />

          <div
            className="absolute transition duration-500 rotate-y-3 group-hover:rotate-y-360 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 bottom-16 left-0 w-40 rounded-lg"
            style={{
              boxShadow: "1px 3px 30px blue",
              border: "1px solid cyan",
              backgroundImage: "linear-gradient(0deg, blue, cyan)",
            }}
          >
            <span 
              className="text-white"
              style={{
                textShadow: "1px 1px 2px black"
              }}
            >
              Add a Bill
            </span>
          </div>
        </button>
      </div>

      <div className="flex flex-row w-screen h-auto overflow-y-auto">
        <BillsContainer />
      </div>
    </main>
  );
}
