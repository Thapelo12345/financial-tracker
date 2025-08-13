import MiniDetailsCell from "./miniDetailsCell"; 

const graphTransaction = [
  {
    description: "Entertainment",
    transactionAmount: 54.78,
    color: "pink",
  },
  {
    description: "Bills",
    transactionAmount: 74.78,
    color: "lime",
  },
  {
    description: "Dining out",
    transactionAmount: 244.43,
    color: "cyan",
  },
  {
    description: "Personal care",
    transactionAmount: 80.7,
    color: "purple",
  },
];

export default function MiniDetails() {
  return (
    <div className="flex flex-col w-full h-full">
    {graphTransaction.map((transaction, idx) => (
      <MiniDetailsCell
        key={idx}
        title={transaction.description}
        color={transaction.color}
        amount={transaction.transactionAmount.toString()}
      />
    ))}
    </div>
  );
}
