import PageHeader from "../components/ui/pageHeader";
import BalanceContainer from "../components/ui/balanceContainer";
import GraphDetails from "../components/budget/graphDetails";
import Piechart from "../components/budget/piechat";
import Barchart from "../components/budget/barchat";
import { db } from "../firebaseConfig";
import { collection, getDocs, updateDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { onOffSubmit } from "../state management/openSubmition";
import { settingSelected } from "../state management/selectSubmit";
import { useState, useEffect } from "react";
import AddItemBtn from "../components/ui/addItemBtn";
import { BudgetContext } from "../components/submitForms/budgetFunctions/budgetContext";

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
  };

  const updateAmount = async (newAmount: number) => {
    const data = sessionStorage.getItem("currentUser");
    setBugdetAmount(newAmount);

    if (data) {
      const user = JSON.parse(data);

      user.budgetAmount = newAmount;
      user.budgetSurplus = newAmount - user.budgetExpense;
      sessionStorage.setItem("currentUser", JSON.stringify(user));

      try {
        const usersSnapshot = await getDocs(collection(db, "users"));
        const matchingUser = usersSnapshot.docs.find((doc) => {
          const userData = doc.data();
          return userData.email === user.email;
        });

        if (!matchingUser) {
          console.log("User not found!.");
        } else {
          await updateDoc(matchingUser.ref, {
            budgetAmount: newAmount,
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <main className="m-2 p-4 w-screen h-screen overflow-y-auto">
      <PageHeader title="Budget" />

      <div className="flex flex-col md:flex-row w-full justify-evenly p-2">
        <BudgetContext.Provider value={{ amount: budgetAmount, updateAmount }}>
          <BalanceContainer
            activeClick={true}
            title="Budget Amount"
            amount={budgetAmount}
          />
          <BalanceContainer
            activeClick={false}
            title="Budget Expense"
            amount={budgetExpense}
          />
          <BalanceContainer
            activeClick={false}
            title="Budget Surplus"
            amount={budgetSurplus}
          />
        </BudgetContext.Provider>
      </div>

      <GraphDetails budgetItem={budgetExpenses} />

      <AddItemBtn tipText="Add Expense" btnFunction={addBudgetExpense} />

      <div className="flex flex-col-reverse sm:flex-row w-full h-full md:h-[50%] p-1">
        <Barchart budgetItem={budgetExpenses} />
        <Piechart budgetItem={budgetExpenses} amount={budgetAmount} />
      </div>
    </main>
  );
}
