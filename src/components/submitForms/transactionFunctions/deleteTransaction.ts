import store from "../../../state management/store";
import { selectDialog } from "../../../state management/selectDialog";
import { openCloseDialog } from "../../../state management/openCloseDialog";
import { getMessage } from "../../../state management/dialogMessage";

type TransactObj = {
  transactionId: number;
  name: string;
  amount: number;
  category: string;
  description: string;
  transactionType: string;
  date: string;
};

type Props = {
  transactionId: number;
};
export default function DeleteTransaction({ transactionId }: Props) {
  const id: number = transactionId;
  const data = sessionStorage.getItem("currentUser");

  if (data) {
    const user = JSON.parse(data);
    const transactions: TransactObj[] = user.transactions;
    const currentTransaction = transactions.find(
      (item) => item.transactionId === id
    );

    if (currentTransaction) {

      if (currentTransaction.transactionType === "Income") {

        if(user.currentBalance >= currentTransaction.amount){
            user.currentBalance -= currentTransaction.amount
        }

        else{
            store.dispatch(getMessage("Sorry expense cant be more than the current Balance, REMOVE AN EXPENSE FIRST"))
            store.dispatch(selectDialog("error"))
            store.dispatch(openCloseDialog())
        }
      } 
      
      
      
      
      else {
        user.transactionExpense -= currentTransaction.amount;
        user.currentBalance += currentTransaction.amount;
      }
      //change current balance or expense
      //change income
      // change transactionTotal
    }
  }
}
