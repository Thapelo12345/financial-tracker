// import Dash from "../components/dash/dash";
import SelectDashBoard from "../components/dash/selectDashBoard";
import TransactionTable from "./transactions";
import Budget from "./budget";
import Pots from "./pots";
import Bills from "./bills";
import Overview from "./overview";
// import TransactionSubmit from "../components/dialogs/transactionSubmit";
import SubmitContainer from "../components/submitForms/submitContainer";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { appUpdated } from "../state management/UpdateAllComponents";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import type { RootState } from "../state management/store";

export default function Home() {

  const dispatch = useDispatch();
  const checkUpdate = useSelector((state: RootState) => state.updateApp.updateApp);

  useEffect(() => {
    if (checkUpdate === true) {
      dispatch(appUpdated());
    }
  }, [checkUpdate]);

  return (
    <div className="relative flex flex-row bg-red-100/5 w-full h-full overflow-hidden m-0 p-0">
      <SelectDashBoard />
<SubmitContainer />
      <Routes>
        <Route index element={<Overview />} />
        <Route path="overview" element={<Overview />} />
        <Route path="transactions" element={<TransactionTable />} />
        <Route path="budget" element={<Budget />} />
        <Route path="pots" element={<Pots />} />
        <Route path="bills" element={<Bills />} />

      </Routes>
    </div>
  );
}