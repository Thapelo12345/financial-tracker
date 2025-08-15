import MiniDetailsCell from "./miniDetailsCell"; 
import { useState, useEffect } from "react";

// const graphTransaction = [
//   {
//     description: "Entertainment",
//     transactionAmount: 54.78,
//     color: "pink",
//   },
//   {
//     description: "Bills",
//     transactionAmount: 74.78,
//     color: "lime",
//   },
//   {
//     description: "Dining out",
//     transactionAmount: 244.43,
//     color: "cyan",
//   },
//   {
//     description: "Personal care",
//     transactionAmount: 80.7,
//     color: "purple",
//   },
// ];

type details = {
  description: string;
  transactionAmount: number;
  color: string;
};

export default function MiniDetails() {

  const [details, setDetails] = useState<details[]>([]);

  useEffect(()=>{
      const data = localStorage.getItem("currentUser")

    if(data){
const user = JSON.parse(data)
setDetails(user.graphDetails)
    }
  },[])

  return (
    <div className="flex flex-col w-full h-full">
    {details.map((detail, idx) => (
      <MiniDetailsCell
        key={idx}
        title={detail.description}
        color={detail.color}
        amount={detail.transactionAmount.toString()}
      />
    ))}
    </div>
  );
}
