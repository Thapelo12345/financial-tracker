import Dash from "../components/dash/dash";
import TransactionTable from "./transactions";
import Budget from "./budget";
import Pots from "./pots";
import Bills from "./bills";
import Overview from "./overview";
import { Routes, Route } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-row bg-red-100/5 w-full h-full overflow-hidden m-0 p-0">
      <Dash />
      
      <Routes>
        <Route path="overview" element={<Overview />} />
        <Route path="transactions" element={<TransactionTable />} />
        <Route path="budget" element={<Budget />} />
        <Route path="pots" element={<Pots />} />
        <Route path="bills" element={<Bills />} />
        {/* Add a default route if needed */}
        <Route index element={<Overview />} />
      </Routes>
    </div>
  );
}