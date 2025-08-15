import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
import { addDoc } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
import store from "../../state management/store";
import { selectDialog } from "../../state management/selectDialog";
import { getMessage } from "../../state management/dialogMessage";
import { openCloseDialog } from "../../state management/openCloseDialog";

const googleProvider = new GoogleAuthProvider();

interface user {
  id: string;
  avatar: string;
  name: string;
  email: string;
  currentBalance: number;
  budgetAmount: number;
  income: number;
  expense: number;
  budgetExpenses: [];
  pots: [];
  graphDetails: [];
  transactions: [];
  recurringBills: [];
}

type NavigateFunction = (path: string) => void;

export async function handleGooglAthentication(navigate: NavigateFunction) {
  try {
    store.dispatch(selectDialog("load"));
    store.dispatch(openCloseDialog());

    const result = await signInWithPopup(auth, googleProvider);

    const userExist = query(
      collection(db, "users"),
      where("id", "==", result.user.uid)
    );

    const snapshot = await getDocs(userExist);

    if (snapshot.empty) {
      const newUser: user = {
        id: result.user.uid,
        avatar: result.user.photoURL || "",
        name: result.user.displayName || "",
        email: result.user.email || "",
        currentBalance: 0,
        budgetAmount: 0,
        income: 0,
        expense: 0,
        budgetExpenses: [],
        pots: [],
        graphDetails: [],
        transactions: [],
        recurringBills: [],
      };

      await addDoc(collection(db, "users"), newUser);
      localStorage.setItem("currentUser", JSON.stringify(newUser));
    } //end of if
    else {
  const userData = snapshot.docs[0].data();
  localStorage.setItem("currentUser", JSON.stringify(userData));
    }

    store.dispatch(selectDialog("confirm"));
    store.dispatch(
      getMessage(
        "Congratulations! You have successfully logged into your account"
      )
    );
    navigate("/home");

    setTimeout(() => {
      store.dispatch(selectDialog("load"));
    }, 5000);

    setTimeout(() => {
      store.dispatch(openCloseDialog());
    }, 7000);
  } catch (error) {
    console.log(error);
    alert(error);
  }
} //end of google auth function
