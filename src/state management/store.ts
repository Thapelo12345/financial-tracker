import { configureStore } from "@reduxjs/toolkit";
import loggedInReducer from "./userLogIn";
import openDialogReducer from "./openCloseDialog";
import dialogMessageReducer from "./dialogMessage";
import selectdailogReducer from './selectDialog'

const store = configureStore({
  reducer: {
   
    loggedIn: loggedInReducer,
    openDialog: openDialogReducer,
    dialogMessage: dialogMessageReducer,
    selectedDialog: selectdailogReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
