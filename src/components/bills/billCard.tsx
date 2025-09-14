import { TrashIcon } from "@heroicons/react/20/solid";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import gsap from "gsap";
// import BillLabel from "../ui/billLabel";
import BillCardHeader from "../ui/bills/billCardHeader";
import { motion } from "framer-motion";
import BillTables from "../ui/bills/billTables";
import { useContext } from "react";
import AutoPayButton from "../ui/bills/autPayToggle";
import { BillContext } from "../submitForms/billsFunctions/billContext";
import { getNextPaymentDate } from "./billGetnextPayment";

/*
type Props = {
  title: string;
  description: string;
  amount: number;
  startDate: string;
  category: string;
  // duration: string;
  frenquently: string;
  status: string;
  paymentBeforeType:string
  paymentBeforeValue:string | number
};
*/
export default function BillCard() {
  const theme = useContext(BillContext);
  const [autoPay, setAutoPay] = useState(true);
  // strat date - due date - frenqulty
  const nextDueDate = getNextPaymentDate("2025-0813", "2025-10-10", "monthly")

  useGSAP(() => {
    gsap.fromTo(
      ".bill-card",
      {
        scale: 0.1,
        opacity: 0.3,
        duration: 0.9,
        boxShadow: 0,
      },
      {
        scale: 1,
        opacity: 1,
        boxShadow: "1px 7px 10px rgba(0,0,0,0.5), inset 2px 1px 5px black",
        stagger: 0.2,
      }
    );
  });

  return (
    <motion.div
      className="bill-card border-5 border-white flex flex-col m-2 w-[90%] sm:max-w-100 p-1 rounded-lg"
      style={{
        backgroundColor: theme.backGround,
        boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.5),inset 2px 1px 5px black",
      }}
    >
      <BillCardHeader />
      <BillTables  category = "Dining" duration = "continuesly" dueDate = {nextDueDate} startDate = {"2025-08-13"} frenquently = "weekly"/>

      <div className="flex flex-row w-[85%] justify-between p-2">
        <label
          className="text-white font-extrabold text-sm p-2"
          style={{ textShadow: "1px 1px 5px black" }}
        >
          Auto Pay
        </label>
        <AutoPayButton pay={autoPay} setAutoPay={setAutoPay} />
      </div>

      <div
        className={`flex flex-row justify-between ${
          autoPay ? "hidden" : "block"
        } p-2`}
      >
        <motion.label
          className="text-white text-xs font-extrabold p-1 w-fit h-fit rounded-lg border-2 border-white"
          style={{
            backgroundColor: "hsl(0 100% 58.3%)",
            boxShadow: "1px 1px 1px black, 1px 5px 10px red",
            textShadow: "1px 1px 1px black",
          }}
          animate={{
            scale: [0.95, 1],
            boxShadow: [
              "1px 1px 1px red, inset 1px 1px 5px white",
              "1px 5px 20px red, inset 1px 1px 5px white",
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          PEDDING PAYMENT
        </motion.label>

        <button
          className="text-sm  border-2 border-white rounded-lg p-1 cursor-pointer"
          style={{ boxShadow: "1px 1px 1px black, inset 1px 1px 5px black" }}
        >
          <span className="text-black m-1">Pedding</span>
        </button>
      </div>

      <div className=""></div>
      {/* descriptio section */}
      <p className="w-full text-xs text-gray-700 p-2 borde-2 border-white">
        i had a greate day day dining with my friends today, We shared a hapapy
        and wonderfuly meal it was all love and play.
      </p>

      <div className="m-2">
        <button>
          <TrashIcon className="w-4 h-4 text-red-500" />
        </button>
      </div>
    </motion.div>
  );
}
