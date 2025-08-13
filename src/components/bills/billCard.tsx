import { PencilSquareIcon, TrashIcon } from "@heroicons/react/20/solid";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import BillLabel from "../ui/billLabel";
import { motion } from "framer-motion";

type Props = {
  Name: string;
  Amount: number;
  DueDate: string;
  Frequency: string;
  StartDate: string;
  Category: string;
  Status: string;
  AutoPay: boolean;
  PaymentMethod: string;
  ReminderDaysBefore: number;
};
export default function BillCard({
  Name,
  Amount,
  DueDate,
  Frequency,
  StartDate,
  Category,
  Status,
  AutoPay,
  PaymentMethod,
  ReminderDaysBefore,
}: Props) {
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
    <motion.div 
    className="bill-card bg-gradient-to-b from-blue-400 to-white shadow-2xl flex flex-col m-2 w-full sm:w-80 lg:w-[34%] p-1 rounded-lg"
    whileHover={{
      scale: 1.04,
      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.6)",
      zIndex: 2
    }}

    transition={{
      duration: 0.2,
      type: "tween",
      ease: "easeInOut",
    }}
    >
      {/* name and amount */}
      <div className="name-amount rounded-md flex flex-row justify-between w-[95%] overflow-y-auto p-2 m-2">
        <h2 className="text-white text-lg text-start font-semibold">{Name}</h2>
        <h2 className="text-white font-serif text-end">R {Amount}</h2>
      </div>

      {/* dates and status */}
      <div className="flex flex-row">
        {/* first section */}

        <div className="m-1 h-52 w-1/2 flex flex-col pt-2">
          <BillLabel title="Due Date" value={DueDate} />
          <BillLabel title="Start Date" value={StartDate} />
          <label className="text-black/50 text-font-bold text-xs p-2">
            status:
            <span
              className={`border border-white text-white font-bold p-1 rounded-md ${
                Status === "inactive" ? "bg-red-500" : "bg-green-300"
              }`}
            >
              {Status}
            </span>
          </label>
          <BillLabel title="Payment" value={PaymentMethod} />
        </div>

        {/* second section  */}
        <div className="m-1 h-52 w-1/2 flex flex-col">
          <BillLabel title="Frenquently" value={Frequency} />
          <BillLabel title="Category" value={Category} />

          <label className="text-black/30 text-font-bold text-xs p-2">
            Auto pay:
            <span
              className={`text-white font-bold p-2 rounded-md ${
                AutoPay ? "bg-blue-400" : "bg-orange-500"
              }`}
            >
              {AutoPay ? "Enable" : "Disable"}
            </span>
          </label>

          <BillLabel title="Due Date" value={DueDate} />
          <label className="text-black/70 text-font-bold text-xs p-2">
            Reminder: <span>{ReminderDaysBefore} Days</span>
          </label>
        </div>
      </div>
      
      {/* buttons holder */}
      <div className="w- full flex flex-row justify-start">
        <button className="m-2">
        <TrashIcon className="w-5 h-5 text-red-500" />
      </button>

      <button className="m-2">
        <PencilSquareIcon className="w-5 h-5 text-green-500" />
      </button>
      </div>
    </motion.div>
  );
}
