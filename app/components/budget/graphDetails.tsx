"use client";

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

export default function GraphDetails() {
  return (
    <div className="flex flex-wrap items-center justify-start w-full h-1/7 overflow-y-auto p-2 m-2">
      {graphTransaction.map((transaction) => (
        <div
          key={transaction.description}
          className="flex flex-row items-center justify-evenly h-8 bg-white rounded-lg p-2 shadow-lg m-2"
        >
          <div
            className="w-4 h-4 rounded-full border-2 mr-2"
            style={{
              backgroundColor: transaction.color,
              borderColor: transaction.color,
            }}
          />
          <h4 className="text-black text-sm font-bold">{transaction.description}</h4>
        </div>
      ))}
    </div>
  );
}
