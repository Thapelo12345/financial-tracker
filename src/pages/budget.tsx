import PageHeader from "../components/ui/pageHeader";
import BalanceContainer from "../components/ui/balanceContainer";
import GraphDetails from "../components/budget/graphDetails";
import Piechart from "../components/budget/piechat";
import Barchart from "../components/budget/barchat";
import { db } from "../firebaseConfig";
import { collection, getDocs, updateDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import type { RootState } from "../state management/store";
import { useDispatch } from "react-redux";
import { onOffSubmit } from "../state management/openSubmition";
import { settingSelected } from "../state management/selectSubmit";
import { appUpdated } from "../state management/UpdateAllComponents";
import { useState, useEffect } from "react";
import AddItemBtn from "../components/ui/addItemBtn";
import { BudgetContext } from "../components/submitForms/budgetFunctions/budgetContext";
import store from "../state management/store";
import { selectDialog } from "../state management/selectDialog";
import { getMessage } from "../state management/dialogMessage";
import { openCloseDialog } from "../state management/openCloseDialog";

interface budgetItem {
  budgetExpenseId: number;
  DescriptionTitle: string;
  Amount: number;
  Color: string;
}

export default function Budget() {
  const dispatch = useDispatch();
 const checkUpdate = useSelector((state: RootState) => state.updateApp.updateApp); 

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
      setExpense(user.budgetExpenses);
    }
  }, [checkUpdate]);

  const addBudgetExpense = () => {
    dispatch(settingSelected("budget"));
    dispatch(onOffSubmit());
  };

  const updateAmount = async (newAmount: number) => {
    const data = sessionStorage.getItem("currentUser");
    
    if (data) {
      const user = JSON.parse(data);

      if(newAmount >= user.budgetExpense){
      setBugdetAmount(newAmount);

      user.budgetAmount = newAmount;
      const surplus = newAmount - user.budgetExpense;
      user.budgetSurplus = Number(surplus.toFixed(2))
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
            budgetSurplus: Number(surplus.toFixed(2))
          });
        }
          dispatch(appUpdated())

      } catch (error) {
        console.log(error);
      }

      }//end of less budget amount if
     
else{
  store.dispatch(selectDialog("error"))
  store.dispatch(getMessage("Sorry amount cant be less than expenses"))
  store.dispatch(openCloseDialog())
}//end of less budget amount else
    }
  };

  return (
    <main className="m-2 p-4 pb-15 md:pb-4 w-screen h-screen overflow-y-auto">
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
