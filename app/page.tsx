import PageHeader from "./components/ui/pageHeader";
import Balances from "./components/balances";
import MiniPots from "./components/overview/miniPots";
import MiniTransaction from "./components/overview/miniTransaction";
import MiniBudget from "./components/overview/miniBudget";

export default function Home() {
  return (
    <div className="m-0 p-4 bg-white/50 w-screen h-screen overflow-y-auto">
      <PageHeader title="Overview" />
      <Balances />

      <div className="flex flex-col justify-evenly md:flex-row w-full">
        <div className="w-full md:w-1/2 h-90 md:h-10 m-2 mb-4">
          <MiniPots />
          <MiniTransaction />
        </div>

        <div className="w-full md:w-1/2 h-[60%] m-2 bg-white rounded-lg p-2 shadow-sm overflow-y-auto">
          <MiniBudget />
        </div>
      </div>
    </div>
  );
}
