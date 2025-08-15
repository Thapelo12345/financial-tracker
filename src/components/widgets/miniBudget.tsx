import MiniHeader from "./minHeader";
import MiniDetailsBtn from "./miniDetailsBtn";
import MiniPiechart from "./miniPieChart";
import MiniDetails from "./miniDetails";
import { useState, useEffect } from "react";

type Prop = {
  animate: string;
};

type details = {
  description: string;
  transactionAmount: number;
  color: string;
};

export default function MiniBudget({ animate }: Prop) {

  const [minBudget, setMiniBudget] = useState<details[]>([])
  const [miniAmount, setAmount] = useState(0)

  useEffect(()=>{
    const data = localStorage.getItem("currentUser")

    if(data){
      const user = JSON.parse(data)
      setMiniBudget(user.graphDetails)
      setAmount(user.budgetAmount)
    }
  },[])

  return (
    <div className={`w-[95%] h-[60%] bg-white rounded-lg ${animate} m-2 mb-4`}>
      <div className="flex flex-row justify-between">
        <MiniHeader title={"Budget"} />
        <MiniDetailsBtn pageUrl="/home/budget"/>
      </div>

      <div className="flex flex-col lg:flex-row w-full h-full">
        <div className="flex items-center justify-center w-full lg:w-[50%] h-1/2 lg:h-full m-1">
          <MiniPiechart budgetItem={minBudget} amount={miniAmount} />
        </div>

        <div className="w-full lg:w-1/2 h-1/2 lg:h-full m-1">
          <MiniDetails />
        </div>
      </div>
    </div>
  );
}
