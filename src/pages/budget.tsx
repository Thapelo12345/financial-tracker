import PageHeader from "../components/ui/pageHeader";
import BalanceContainer from "../components/ui/balanceContainer";
import GraphDetails from "../components/budget/graphDetails";
import Piechart from "../components/budget/piechat";
import Barchart from "../components/budget/barchat";
import { PlusIcon } from "@heroicons/react/20/solid";

// let budgetAmount: number = 0.0;

export default function Budget() {
  return (
    <main
      className="m-2 p-4 w-screen h-screen overflow-y-auto"
      style={{ backgroundColor: "whitesmoke" }}
    >
      <PageHeader title="Budget" />

      <div className="flex flex-col md:flex-row w-full justify-evenly p-2">
        <BalanceContainer title="Budget Amount" amount={36.45} />
        <BalanceContainer title="Budget Expense" amount={11.23} />
        <BalanceContainer title="Budget Surplus" amount={5.13} />
      </div>

      <GraphDetails />
      <button className="m-2">
        <PlusIcon className="w-10 h-10 text-green-300" />
      </button>

      <div className="flex flex-col-reverse sm:flex-row w-full h-full md:h-[50%] p-1">
        <Barchart />
        <Piechart />
      </div>
    </main>
  );
}
