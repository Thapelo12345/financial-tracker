import PageHeader from "../components/ui/pageHeader";
import TransactionTable from "../components/transactionTable";
import BalanceContainer from "../components/ui/balanceContainer";
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

    const data = localStorage.getItem("currentUser")

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
        <BalanceContainer title="Total Income" amount={totalAmount} />
        <BalanceContainer title="Tota Expense" amount={totalExpense} />
        <button
        className="w-fit text-xs m-2 p-2"
        onClick={()=>{
          dispatch(settingSelected("transaction"))
          dispatch(onOffSubmit())
        }}
        >Add transaction</button>
      </div>

      <TransactionTable />
    </main>
  );
}
