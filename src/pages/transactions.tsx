import PageHeader from "../components/ui/pageHeader";
import TransactionTable from "../components/transactionTable";
import BalanceContainer from "../components/ui/balanceContainer";

export default function Transactions() {
  return (
    <main
      className="flex flex-col w-screen h-screen m-2 p-4 overflow-y-auto"
      style={{ backgroundColor: "whitesmoke" }}
    >
      <PageHeader title="Transactions" />
      <div className="flex flex-row w-full">
        <BalanceContainer title="Total Income" amount={389.45} />
        <BalanceContainer title="Tota Expense" amount={39.45} />
      </div>

      <TransactionTable />
    </main>
  );
}
