import MiniHeader from "./minHeader";
import { useSelector } from "react-redux";
import MiniDetailsBtn from "./miniDetailsBtn";
import MiniBillsCell from "./miniBillsCell";
import { useState, useEffect } from "react";
import { getNextPaymentDate } from "../functions/bill/billGetnextPayment";
import { DaysLeft } from "../functions/bill/billGetnextPayment";
import type { RootState } from "../../state management/store";
import type { DataBaseBill } from "../functions/bill/billInterface";

type Prop = {
  animate: string;
};
export default function MiniBills({ animate }: Prop) {

  const checkUpdate = useSelector(
    (state: RootState) => state.updateApp.updateApp
  );

  const [paidBills, setPaidBills] = useState(0)
  const [dueBills, setDueBills] = useState(0)
  const [upcoming, setUpcoming] = useState(0)

  useEffect(() => {
      const data = sessionStorage.getItem("currentUser");
  
      if (data) {
        const user = JSON.parse(data);
  
        if (user.recurringBills.length !== 0) {
          user.recurringBills.forEach((bill: DataBaseBill) => {
            const countDays = DaysLeft(
              getNextPaymentDate(bill.startDate, bill.dueDate, bill.frenquently)
            );
  
            const counter = (): number => {
              switch (bill.frenquently) {
                case "weekly":
                  return 4;
                  break;
  
                case "monthly":
                  return 10;
                  break;
  
                case "yearlty":
                  return 20;
                  break;
  
                default:
                  return 0;
                  break;
              }
            };
  
            if (countDays <= counter() && countDays > counter() * 0.5) {
              setUpcoming(upcoming + bill.amount);
            } else if (countDays <= counter() * 0.5 && counter() > 0) {
              setDueBills(dueBills + bill.amount);
            } else {
              setPaidBills(paidBills + bill.amount);
            }
          });
        } //end of if array length
        else {
          setPaidBills(0);
          setDueBills(0);
          setUpcoming(0);
        } //end of else array length
      }
    }, [checkUpdate]);

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
