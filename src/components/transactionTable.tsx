import TransactionCell from "./ui/transaction/transactionCell";
import { useState, useEffect } from "react";

interface Transaction {
  date: string;
  name: string;
  description: string;
  category: string;
  type: "Income" | "Expense";
  amount: number;
}

export default function TransactionTable() {
  
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("currentUser");

    if (data) {
      const user = JSON.parse(data);
      setTransactions(user.transactions);
    }
  }, []);

  return (
    <div className="w-[99%] h-[87%] overflow-y-auto overflow-x-hidden p-0 md:p-2 pt-32">
      <ul className="w-full h-full">
        {transactions.map((transaction, index) => (
          <TransactionCell
            key={`${transaction.date}-${transaction.name}-${index}`}
            Date={transaction.date}
            Name={transaction.name}
            Description={transaction.description}
            Category={transaction.category}
            Type={transaction.type}
            Amount={transaction.amount}
          />
        ))}
      </ul>
    </div>
  );
}
