import PageHeader from "../components/ui/pageHeader";
import TransactionTable from "../components/transactionTable";
import BalanceContainer from "../components/ui/balanceContainer";
import { useState, useEffect } from "react";

export default function Transactions() {

  const [totalAmount, setAmount] = useState(0);
  const [totalExpense, setExpense] = useState(0)

  useEffect(()=>{

    const data = localStorage.getItem("currentUser")

    if(data){
      const currentUser = JSON.parse(data)
      setAmount(currentUser.transactionTotal)
      setExpense(currentUser.transactionExpense)
    }

  },[])

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
        >Add transaction</button>
      </div>

      <TransactionTable />
    </main>
  );
}
