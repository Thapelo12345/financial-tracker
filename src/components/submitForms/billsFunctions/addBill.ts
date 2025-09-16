
import { GetDate } from "../getcurrentDate";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, updateDoc, arrayUnion } from "firebase/firestore";
import store from "../../../state management/store";
import { selectDialog } from "../../../state management/selectDialog";
import { openCloseDialog } from "../../../state management/openCloseDialog";
import { getMessage } from "../../../state management/dialogMessage";
import { appUpdated } from "../../../state management/UpdateAllComponents";

interface Bill {
  id: number;
  title: string;
  description: string;
  amount: number;
  startDate: string;
  dueDate: string;
  endDate: string;
  category: string;
  duration: string;
  frenquently: string;
  status: string;
  autoPay: boolean;
  settledBill: boolean;
  daysLeft: number,
}

export async function AddBill(
  billTitle: string,
  billDescription: string,
  billAmount: number,
  billStartDate: string,
  billDueDate: string,
  billEndDate: string,
  billCategory: string,
  billDuration: string,
  billFrenquently: string,
  billStatus: string,
) {
  store.dispatch(selectDialog("load"));
  store.dispatch(openCloseDialog());

  const data = sessionStorage.getItem("currentUser");

  if (data) {
 
    const crrUser = JSON.parse(data);
    const billId = crrUser.recurringBills.length + 1;
        
    const newBill: Bill = {
      id: billId,
      title: billTitle,
      description: billDescription,
      amount: billAmount,
      startDate: billStartDate === "" ? GetDate() : billStartDate,
      dueDate: billDueDate,
      endDate: billEndDate,
      category: billCategory,
      duration: billDuration,
      frenquently: billFrenquently,
      status: billStatus,
      autoPay: true,
      settledBill: true,
      daysLeft: 0
    };

    try{
        const getDocuments = await getDocs(collection(db, "users"))
        const matchingUser = getDocuments.docs.find((doc) => doc.data().email === crrUser.email)

        if(!matchingUser){
            store.dispatch(getMessage("User credentials not found"))
            store.dispatch(selectDialog("error"))
        }
        else{
            await updateDoc(matchingUser.ref, {
                recurringBills: arrayUnion(newBill)
            })
            .then(()=>{
                crrUser.recurringBills.push(newBill)
                sessionStorage.setItem("currentUser", JSON.stringify(crrUser))

                store.dispatch(getMessage("Recurring bill added successfully"))
                store.dispatch(selectDialog("confirm"))
                store.dispatch(appUpdated())

                setTimeout(()=>{store.dispatch(openCloseDialog())}, 2000)
            })
            .catch((error)=> console.log(error))
        }
    }

    catch(error){console.log(error)}



  } //end of data if
  else {
    store.dispatch(getMessage("User credentials not found"));
    store.dispatch(selectDialog("error"));
  } //end of else data
} //end of add bill function
