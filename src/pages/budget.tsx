import PageHeader from "../components/ui/pageHeader";
import BalanceContainer from "../components/ui/balanceContainer";
import GraphDetails from "../components/budget/graphDetails";
import Piechart from "../components/budget/piechat";
import Barchart from "../components/budget/barchat";
import BudgetInputAmount from "../components/ui/budget/budgetAmountInput";
import { useDispatch } from "react-redux";
import { onOffSubmit } from "../state management/openSubmition";
import { settingSelected } from "../state management/selectSubmit";
import { PlusIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";

interface budgetItem {
  description: string;
  transactionAmount: number;
  color: string;
}


export default function Budget() {
  const dispatch = useDispatch();

  const [addBudgetAmount, setEditBudget] = useState(false);
  const [budgetAmount, setBugdetAmount] = useState(0);
  const [budgetExpense, setBudgetExpense] = useState(0);
  const [budgetSurplus, setBudgetSurplus] = useState(0);
  const [budgetExpenses, setExpense] = useState<budgetItem[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("currentUser");

    if (data) {
      const user = JSON.parse(data);

      setBugdetAmount(user.budgetAmount);
      setBudgetExpense(user.budgetExpense);
      setBudgetSurplus(user.budgetSurplus);
      setExpense(user.graphDetails);
    }
  }, []);

 
  const handleBudgetAmountClick = ()=>{
    setEditBudget(true)
  }

  return (
    <main className="m-2 p-4 w-screen h-screen overflow-y-auto">
      <PageHeader title="Budget" />

      <div className="flex flex-col md:flex-row w-full justify-evenly p-2">
        {!addBudgetAmount && (
          <BalanceContainer
            title="Budget Amount"
            amount={budgetAmount}
            actOnClick={handleBudgetAmountClick}
          />
        )}
        {addBudgetAmount && (
          <BudgetInputAmount
            title="Budget Amoount"
            setAmount={setBugdetAmount}
           close={setEditBudget}
          />
        )}

        <BalanceContainer title="Budget Expense" amount={budgetExpense} />
        <BalanceContainer title="Budget Surplus" amount={budgetSurplus} />
      </div>

      <GraphDetails budgetItem={budgetExpenses} />
      <button
        className="m-2"
        onClick={() => {
          dispatch(settingSelected("budget"));
          dispatch(onOffSubmit());
        }}
      >
        <PlusIcon className="w-10 h-10 text-green-300" />
      </button>

      <div className="flex flex-col-reverse sm:flex-row w-full h-full md:h-[50%] p-1">
        <Barchart budgetItem={budgetExpenses} />
        <Piechart budgetItem={budgetExpenses} amount={budgetAmount} />
      </div>
    </main>
  );
}
