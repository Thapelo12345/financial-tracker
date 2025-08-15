import MiniHeader from "./minHeader";
import MiniDetailsBtn from "./miniDetailsBtn";
import MiniBillsCell from "./miniBillsCell";
import { useState, useEffect } from "react";

type Prop = {
  animate: string;
};
export default function MiniBills({ animate }: Prop) {

  const [paidBills, setPaidBills] = useState(0)
  const [dueBills, setDueBills] = useState(0)
  const [upcoming, setUpcoming] = useState(0)

  useEffect(()=> {
    const data = localStorage.getItem("currentUser")

    if(data){
      const user = JSON.parse(data)

      setPaidBills(user.paidBills)
      setDueBills(user.billsDue)
      setUpcoming(user.upcomingBills)
    }
  },[])

  return (
    <div className={`w-full bg-white m-2 rounded-lg ${animate}`}>
      <div className="flex flex-row justify-between">
        <MiniHeader title={"Recurring Bills"} />
        <MiniDetailsBtn pageUrl="/home/bills"/>
      </div>

      <div className="flex flex-col w-full p-2">
        <MiniBillsCell title="Paid Bills" color="lime" amount={paidBills} />
        <MiniBillsCell title="Bills Due" color="hotpink" amount={dueBills} />
        <MiniBillsCell title="Upcoming Bills" color="cyan" amount={upcoming} />
      </div>
    </div>
  );
}
