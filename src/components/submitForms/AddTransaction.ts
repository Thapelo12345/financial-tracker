import { updateDoc, arrayUnion, getDocs, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { openCloseDialog } from "../../state management/openCloseDialog";
import { getMessage } from "../../state management/dialogMessage";
import { selectDialog } from "../../state management/selectDialog";
import { appUpdated } from "../../state management/UpdateAllComponents";
import store from "../../state management/store";

type Transaction = {
  Name: string;
  Amount: number;
  Category: string;
  Description: string;
  TransactionType: string;
};

export default async function AddTransaction({
  Name,
  Amount,
  Category,
  Description,
  TransactionType,
}: Transaction) {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  type TransactObj = {
    name: string;
    amount: number;
    category: string;
    description: string;
    transactionType: string;
    date: string;
  };

  const newTransaction: TransactObj = {
    name: Name,
    amount: Amount,
    category: Category,
    description: Description,
    transactionType: TransactionType,
    date: formattedDate,
  };

  const data = localStorage.getItem("currentUser");
  if (data) {
    try {
      const currentUser = JSON.parse(data);
      const searchName = currentUser.name;

      // 1. Get all users
      const usersSnapshot = await getDocs(collection(db, "users"));

      // 2. Find matching user locally
      const matchingUser = usersSnapshot.docs.find((doc) => {
        const userData = doc.data();
        return userData.name === searchName;
      });

      if (!matchingUser) {
        console.error("No user found. Available users:");
        usersSnapshot.forEach((doc) => {
          console.log(`- ${doc.data().name}`);
        });

        store.dispatch(getMessage("No user found!"));
        store.dispatch(selectDialog("error"));
        store.dispatch(openCloseDialog());
        return false;
      }

      // 3. Update the found user
      await updateDoc(matchingUser.ref, {
        transactions: arrayUnion(newTransaction),
      });

      if (TransactionType !== "Expense") {
        const currentBalance = currentUser.currentBalance + Amount;
        const income = currentUser.income + Amount;
        const transactionTotal = currentUser.transactionTotal + Amount;
        const transactionTaotalRounded = Math.round(transactionTotal * 100) / 100;
        const incomeRounded =Math.round(income * 100) / 100;
        const roundedBalance = Math.round(currentBalance * 100) / 100;

        currentUser.currentBalance = roundedBalance;
        currentUser.income = incomeRounded;
        currentUser.transactionTotal = transactionTaotalRounded;
        currentUser.transactions.push(newTransaction);
        currentUser.date = formattedDate;   
        localStorage.setItem("currentUser", JSON.stringify(currentUser));

        await updateDoc(matchingUser.ref, {
          currentBalance: roundedBalance,
          income: incomeRounded,
          transactionTotal: transactionTaotalRounded,
        });

        return true;
      } else {

        if (currentUser.expense <= currentUser.currentBalance) {

          const expense = currentUser.expense + Amount;
          const transactionExpense = currentUser.transactionExpense + Amount;
          const currentBalance = currentUser.currentBalance - Amount;
          
          const transactionExpenseRounded = Math.round(transactionExpense * 100) / 100;
          const roundedBalance = Math.round(currentBalance * 100) / 100;
          const roundedExpense = Math.round(expense * 100) / 100;

          currentUser.expense = roundedExpense;
          currentUser.currentBalance = roundedBalance;
          currentUser.transactionExpense = transactionExpenseRounded;
            currentUser.transactions.push(newTransaction);
          localStorage.setItem("currentUser", JSON.stringify(currentUser));

          await updateDoc(matchingUser.ref, {
            currentBalance: roundedBalance,
            expense: roundedExpense,
            transactionExpense: transactionExpenseRounded,
          });
        } else {
          store.dispatch(
            getMessage("You don't have enough balance to make this expense!")
          );
          store.dispatch(selectDialog("error"));
          store.dispatch(openCloseDialog());
        }
      }

      store.dispatch(appUpdated());

    } catch (error) {
      console.log(error);
    }
  } //end of if
  else {
    alert("No data was found!..");
  }
} //end of add transaction
