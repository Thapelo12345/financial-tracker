
import PageHeader from "../components/ui/pageHeader";
import BalanceContainer from "../components/ui/balanceContainer";
import PotsCard from "../components/pots/potCard";

export default function Pots() {
  return (
    <main
      className="m-2 p-4 w-screen h-screen overflow-y-auto"
      style={{ backgroundColor: "whitesmoke" }}
    >
      <PageHeader title="Pots" />

      <div className="flex flex-col md:flex-row w-full justify-start p-2">
        <BalanceContainer title="Pots Value" amount={368.45} />
      </div>

      <div
        className="flex flex-row flex-wrap justify-start w-full"
        style={{ perspective: "1000px" }}
      >
        <PotsCard title="Gift cards" amount="500" />
        <PotsCard title="Savings" amount="12 000" />
        <PotsCard title="Voucher" amount="300" />
      </div>
    </main>
  );
}
