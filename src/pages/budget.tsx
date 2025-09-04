import PageHeader from "../components/ui/pageHeader";
import BalanceContainer from "../components/ui/balanceContainer";
import GraphDetails from "../components/budget/graphDetails";
import Piechart from "../components/budget/piechat";
import Barchart from "../components/budget/barchat";
import { useDispatch } from "react-redux";
import { onOffSubmit } from "../state management/openSubmition";
import { settingSelected } from "../state management/selectSubmit";
import { useState, useEffect } from "react";
import AddItemBtn from "../components/ui/addItemBtn";

interface budgetItem {
  description: string;
  transactionAmount: number;
  color: string;
}

export default function Budget() {
  const dispatch = useDispatch();

  const [budgetAmount, setBugdetAmount] = useState(0);
  const [budgetExpense, setBudgetExpense] = useState(0);
  const [budgetSurplus, setBudgetSurplus] = useState(0);
  const [budgetExpenses, setExpense] = useState<budgetItem[]>([]);


  useEffect(() => {
    const data = sessionStorage.getItem("currentUser");

    if (data) {
      const user = JSON.parse(data);

      setBugdetAmount(user.budgetAmount);
      setBudgetExpense(user.budgetExpense);
      setBudgetSurplus(user.budgetSurplus);
      setExpense(user.graphDetails);
    }
  }, []);

  const addBudgetExpense = () => {
    dispatch(settingSelected("budget"));
    dispatch(onOffSubmit());

  }

// function updateAmount(newAmount: number){
//   let data = JSON.parse(sessionStorage.getItem('currentUser') || '{}');
  
//   if(data){
//     data.budgetAmount = newAmount;
//     data.budgetSurplus = newAmount - data.budgetExpense;
//     sessionStorage.setItem('currentUser', JSON.stringify(data));
//   }
// }
 
  return (
    <main className="m-2 p-4 w-screen h-screen overflow-y-auto">
      <PageHeader title="Budget" />

      <div className="flex flex-col md:flex-row w-full justify-evenly p-2">
          <BalanceContainer
            activeClick={true}
            title="Budget Amount"
            amount={budgetAmount}
          />
        
        <BalanceContainer activeClick={false} title="Budget Expense" amount={budgetExpense} />
        <BalanceContainer activeClick={false} title="Budget Surplus" amount={budgetSurplus} />
      </div>

      <GraphDetails budgetItem={budgetExpenses} />
       {/*
      <button
        className="m-2"
        onClick={() => {
          dispatch(settingSelected("budget"));
          dispatch(onOffSubmit());
        }}
      >
        <PlusIcon className="w-10 h-10 text-green-300" />
      </button> */}
     <AddItemBtn tipText="Add Expense" btnFunction={addBudgetExpense}/>

      <div className="flex flex-col-reverse sm:flex-row w-full h-full md:h-[50%] p-1">
        <Barchart budgetItem={budgetExpenses} />
        <Piechart budgetItem={budgetExpenses} amount={budgetAmount} />
      </div>
    </main>
  );
}
