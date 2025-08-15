
import Avatar from "../avatar";
import { motion } from "framer-motion";
import { TrashIcon } from "@heroicons/react/20/solid";
import { useGSAP } from '@gsap/react'
import gsap from "gsap"

type Props = {
  Date: string;
  Name: string;
  Description: string;
  Category: string;
  Type: string;
  Amount: number;
};

export default function TransactionCell({
  Date,
  Name,
  Description,
  Category,
  Type,
  Amount,
}: Props) {

  useGSAP(() => {
    gsap.fromTo(".transac", {
      x: 970
    },
     {
        x: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: "power4"
     })
  })

  return (

    <motion.li 
    className="transac group shadow-md flex flex-row flex-nowrap items-start m-2 w-full p-2"
    whileHover={{
      width: "98%",
      scale: 1.02,
      boxShadow: "0px 10px 100px rgba(0,0,0, 0.7)",
      backgroundColor: "white",
      borderRadius: "10px",
      translateY: "-25px"
    }}

    transition={{
      duration: 0.6
    }}
    >
      <Avatar name={Name} avatar="" />

      <div className="flex flex-col w-full h-full">
        <div className="flex flex-row justify-between">
          <label className="text-black text-md text-start font-semibold">
            {Name}
          </label>
          <label
            className={`${
              Type !== "Income" ? "text-red-500" : "text-green-500"
            } text-md text-end font-semibold  `}
          >
            {Type === "Income" ? "+ " : "- "}R {Amount}
          </label>

          <button className="hidden group-hover:block">
            <TrashIcon className="w-5 h-5 text-red-500" />
          </button>
        </div>

        <div className="flex flex-row justify-between">
          <label className="text-black/50  text-xs text-start">
            {Category}
          </label>
          <label className="text-black/50 text-xs text-end">{Date}</label>
        </div>
      </div>
{/* Description tag */}
      <div className="shadow-lg shadow-black/40 text-sm text-black bg-white font-serif hidden group-hover:block left-1/2 rounded-lg top-1/2 z-10 absolute p-2">
<p>{Description}</p>
      </div>
    </motion.li>
  );
}
