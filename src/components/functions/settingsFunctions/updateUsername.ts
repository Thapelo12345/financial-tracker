import { db } from "../../../firebaseConfig";
import { getDocs, collection, updateDoc } from "firebase/firestore";
import store from "../../../state management/store";
import { selectDialog } from "../../../state management/selectDialog";
import { getMessage } from "../../../state management/dialogMessage";
import { openCloseDialog } from "../../../state management/openCloseDialog";
import { appUpdated } from "../../../state management/UpdateAllComponents";

export default async function UpdateUserName(username: string) {
  const data = sessionStorage.getItem("currentUser");

  if (data) {
    store.dispatch(selectDialog("load"));
    store.dispatch(openCloseDialog());

    const user = JSON.parse(data);

    try {
      const getDocuments = await getDocs(collection(db, "users"));
      const matchingUser = getDocuments.docs.find(
        (doc) => doc.data().email === user.email
      );
      if (matchingUser) {
        await updateDoc(matchingUser.ref, {
          name: username,
        }).then(() => {
          user.name = username;
          sessionStorage.setItem("currentUser", JSON.stringify(user));

          store.dispatch(getMessage("Username updated successfully"));
          store.dispatch(selectDialog("confirm"));
          store.dispatch(appUpdated())

          setTimeout(() => {
            store.dispatch(openCloseDialog());
          }, 2000);
        });
      } else {
        store.dispatch(getMessage("No user with such credentials found"));
        store.dispatch(selectDialog("error"));
      }
    } catch (error) {
      store.dispatch(getMessage("No user with such credentials found"));
      store.dispatch(selectDialog("error"));
      console.log(error);
    }
  }
}
