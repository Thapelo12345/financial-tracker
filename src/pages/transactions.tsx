import PageHeader from "../components/ui/pageHeader";
import TransactionTable from "../components/transactionTable";
import BalanceContainer from "../components/ui/balanceContainer";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { useDispatch } from "react-redux";
import { onOffSubmit } from "../state management/openSubmition";
import { settingSelected } from "../state management/selectSubmit";
import { useSelector } from "react-redux";
import type { RootState } from "../state management/store";
import { useState, useEffect } from "react";

export default function Transactions() {

  const dispatch = useDispatch();

 const checkUpdate = useSelector((state: RootState) => state.updateApp.updateApp); 
  const [totalAmount, setAmount] = useState(0);
  const [totalExpense, setExpense] = useState(0)

  useEffect(()=>{

    const data = sessionStorage.getItem("currentUser")

    if(data){
      const currentUser = JSON.parse(data)
      setAmount(currentUser.transactionTotal)
      setExpense(currentUser.transactionExpense)
    }

  },[checkUpdate])

  return (
    <main
      className="flex flex-col w-screen h-screen m-2 p-4 pb-10 overflow-y-auto"
    >
      <PageHeader title="Transactions" />

      <div className="flex flex-col sm:flex-row justify-items-start w-full">
        <BalanceContainer activeClick={false} title="Total Income" amount={totalAmount} />
        <BalanceContainer activeClick={false} title="Tota Expense" amount={totalExpense} />
        {/* <button
        className="w-fit text-xs m-2 p-2"
        onClick={()=>{
          dispatch(settingSelected("transaction"))
          dispatch(onOffSubmit())
        }}
        >Add transaction</button> */}

        <button 
          className="group relative group w-15 h-15 m-2 p-2"
          onClick={()=>{
          dispatch(settingSelected("transaction"))
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
              Add a Transaction
            </span>
          </div>
        </button>
      </div>

      <TransactionTable />
    </main>
  );
}
