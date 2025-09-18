import { TrashIcon } from "@heroicons/react/20/solid";
import { useGSAP } from "@gsap/react";
import { useState, useEffect, useContext } from "react";
import { DaysLeft } from "./billGetnextPayment";
import gsap from "gsap";
import type { DataBaseBill } from "./billInterface";
import BillCardHeader from "../ui/bills/billCardHeader";
import DeleteBill from "../submitForms/billsFunctions/deleteBill";
import { motion } from "framer-motion";
import BillTables from "../ui/bills/billTables";
import {
  BillContext,
  LoadContext,
} from "../submitForms/billsFunctions/billContext";
import BillLoader from "./billCardLoad";
import { getNextPaymentDate } from "./billGetnextPayment";
import { UpdateBill } from "../submitForms/billsFunctions/updateBill";

type Props = {
  billId: number;
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
}: Props) {
  const theme = useContext(BillContext);

  const [billMessage, setBillMessage] = useState("bill up to date");
  const [billMessageColor, setBillMessageColor] = useState("lime");
  const [load, setLoad] = useState(false);

  // strat date - due date - frenqulty
  const nextDueDate = getNextPaymentDate(startDate, dueDate, frenquently);

  function currentBill(): DataBaseBill | null {
    const data = sessionStorage.getItem("currentUser");

    if (data) {
      const user = JSON.parse(data);

      const currentBill = user.recurringBills.find(
        (item: DataBaseBill) => item.id === billId
      );
      return currentBill !== undefined ? currentBill : null;
    }
    return null;
  }

  useEffect(() => {
    if (load == true) {
      const crrBill = currentBill();

      if (crrBill !== null) {
        crrBill.status = theme.statusTheme;
        UpdateBill(crrBill, setLoad);
      }
    } //end of currentBill if
  }, [theme.statusTheme]);

  useEffect(() => {
    const days = DaysLeft(nextDueDate);
    const counter = (): number => {
      switch (frenquently) {
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

    if (days <= counter() && days > counter() * 0.5) {
      setBillMessage("Next Bill Payment");
      setBillMessageColor("skyblue");
    } else if (days <= counter() * 0.5 && counter() > 0) {
      setBillMessage("bill due");
      setBillMessageColor("red");
    } else {
      setBillMessage("bill up to date");
      setBillMessageColor("lime");
    }
  }, []);

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
        boxShadow: "1px 7px 10px rgba(0,0,0,0.5)",
        stagger: 0.2,
      }
    );
  });

  return (
    <LoadContext.Provider value={{ load: setLoad }}>
      <motion.div
        className="bill-card relative flex flex-col m-2 w-[90%] sm:max-w-100 p-1 rounded-lg"
        style={{
          backgroundColor: "whitesmoke",
          boxShadow: `1px 1px 5px black`,
        }}
      >
        {load && <BillLoader />}

        <BillCardHeader name={title} installment={amount} />

        <BillTables
          category={category}
          duration={duration}
          dueDate={nextDueDate}
          startDate={startDate}
          frenquently={frenquently}
          endDate={endDate}
        />

        <div className="flex flex-row justify-between">
          <motion.label
          initial={{
            scale: 0.9,
            boxShadow: "none"
          }}

          animate={{
            scale: 1, 
            boxShadow: `1px 9px 20px rgba(0, 0, 0, 0.5)`
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse"
          }}
            className="text-white text-xs self-center font-extrabold p-2 ml-10 w-fit h-fit rounded-sm"
            style={{
              backgroundColor: billMessageColor,
              boxShadow: `1px 9px 20px rgba(0, 0, 0, 0.5)`,
              textShadow: "1px 1px 1px black",
            }}
          >
            {billMessage.toUpperCase()}
          </motion.label>
        </div>

 {/* descriptio section */}
        <div className="flex flex-col items-center m-2">
          <label
          className="text-md text-white font-extrabold underline"
          style={{
            WebkitTextStrokeColor: "black",
            WebkitTextStrokeWidth: "0.5px",
            textShadow: "1px 0px 2px black"
          }}
          >Description</label>
        <p className="text-sm font-bold bg-black/20 rounded-md text-white p-2 m-2 "
        style={{
          // textShadow: "0px 0px 3px black"
        }
        }
        >
          {description}
        </p>
        </div>
       

        <div className="m-2">
          <button onClick={() => DeleteBill(billId)}>
            <TrashIcon className="w-5 h-5 text-red-500" />
          </button>
        </div>
      </motion.div>
    </LoadContext.Provider>
  );
}
