import { TrashIcon } from "@heroicons/react/20/solid";
import { useGSAP } from "@gsap/react";
import { useState, useEffect } from "react";
import { DaysLeft } from "./billGetnextPayment";
import gsap from "gsap";
import BillCardHeader from "../ui/bills/billCardHeader";
import DeleteBill from "../submitForms/billsFunctions/deleteBill";
import { motion } from "framer-motion";
import BillTables from "../ui/bills/billTables";
import { useContext } from "react";
import AutoPayButton from "../ui/bills/autPayToggle";
import { BillContext } from "../submitForms/billsFunctions/billContext";
// import BillLoader from "./billCardLoad";
import { getNextPaymentDate } from "./billGetnextPayment";

type Props = {
  billId: number,
  title: string;
  description: string;
  amount: number;
  startDate: string;
  dueDate: string;
  endDate: string;
  category: string;
  duration: string;
  frenquently: string;
  status: string;
  AutoPay: boolean;
  settleBill: boolean;
  days: number,
};

export default function BillCard({
  billId,
  title,
  amount,
  description,
  startDate,
  dueDate,
  endDate,
  category,
  duration,
  frenquently,
  status,
  AutoPay,
  settleBill,
  days
}:Props) {
  
  const theme = useContext(BillContext);
  theme.setTheme(status)

  const [billMessage, setBillMessage] = useState("bill paid");
  const [billMessageColor, setBillMessageColor] = useState("lime");
  const [autoPay, setAutoPay] = useState(AutoPay);
  const [paid, setPaid] = useState(settleBill);
  // const [currentStatus, setCurrentStatus] = useState(status) 
  const [countDays, setCountDays] = useState(days);
  // const [load, setLoad] = useState(false);

  // strat date - due date - frenqulty
  const nextDueDate = getNextPaymentDate(startDate, dueDate, frenquently);

  useEffect(() => {
    const letfDays = DaysLeft("2025-09-20");

    if (letfDays <= 10 && countDays === 0) {
      setPaid(false);
      setCountDays(letfDays);
    }
  }, []);

  useEffect(() => {
    const letfDays = DaysLeft(dueDate);

    if (letfDays <= 10 && letfDays > 5 && !paid) {
      setCountDays(letfDays);
      setBillMessage("payment Due");
      setBillMessageColor("hsl(333 100% 58.8%)");

    } else if (letfDays <= 5 && !paid) {
      setCountDays(letfDays);
      setBillMessage("pending");
      setBillMessageColor("hsl(0 100% 58.3%)");
    } 
    else {
      setBillMessage("bill paid");
      setBillMessageColor("lime");
    }
  }, []);

  useEffect(()=>{
  },[theme.statusTheme])

  useEffect(() => {
    // if(countDays)
  }, [paid]);

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
      className="bill-card relative border-5 border-white flex flex-col m-2 w-[90%] sm:max-w-100 p-1 rounded-lg"
      style={{
        backgroundColor: theme.backGround,
        boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.5),inset 2px 1px 5px black",
      }}
    >
      {/* {
        load && 
      <BillLoader />
      } */}

      <BillCardHeader name={title} installment={amount}/>

      <BillTables
        category={category}
        duration={duration}
        dueDate={nextDueDate}
        startDate={startDate}
        frenquently={frenquently}
        endDate={endDate}
      />

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
            // backgroundColor: "hsl(0 100% 58.3%)",
            backgroundColor: billMessageColor,
            boxShadow: `1px 1px 1px black, 1px 5px 10px ${billMessageColor}`,
            textShadow: "1px 1px 1px black",
          }}
          animate={{
            scale: [0.95, 1],
            boxShadow: [
              `1px 1px 1px ${billMessageColor}, inset 1px 1px 5px white`,
              `1px 5px 20px ${billMessageColor}, inset 1px 1px 5px white`,
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          {billMessage.toUpperCase()}
        </motion.label>

        <button
          className={`${
            billMessage === "bill paid" ? "hidden" : "block"
          } bg-green-400 text-sm  border-2 border-white rounded-lg p-1 cursor-pointer`}
          style={{ boxShadow: "1px 1px 1px black, inset 1px 1px 5px black" }}
        >
          <span
            className="text-white font-bold m-1 w-full h-full"
            style={{
              textShadow: "1px 0px 0px black",
            }}
            onClick={() => setPaid(true)}
          >
            HAVE PAID
          </span>
        </button>
      </div>

      <div className=""></div>
      {/* descriptio section */}
      <p className="w-full text-xs text-gray-700 p-2 borde-2 border-white">
       {description}
      </p>

      <div className="m-2">
        <button
        onClick={()=> DeleteBill(billId)}
        >
          <TrashIcon className="w-4 h-4 text-red-500" />
        </button>
      </div>
    </motion.div>
  );
}
