import { motion } from "framer-motion";
import { ArrowPathIcon } from "@heroicons/react/20/solid";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { selectDialog } from "../state management/selectDialog";
import { getMessage } from "../state management/dialogMessage";
import { openCloseDialog } from "../state management/openCloseDialog";

type Props ={
    currentBalance: number;
    closing:() => void;
    // updateCurrentValue:(value: number)=> void
}

export default function BalanceInput({ currentBalance, closing }:Props){

const [finalAmount, setFinalAmount] = useState(0)
const dispatch = useDispatch()

return(
     <div className="w-full m-2 flex flex-col items-center justify-center mb-0 p-1 overflow-hidden">
        <input
          className="p-1 m-1 w-full text-xs bg-[whitesmoke] rounded-sm focus:outline-0 overflow-hidden"
          style={{boxShadow:"inset 2px 2px 2px hsl(2, 3%, 70%), inset -2px -2px 4px rgba(255, 255, 255, 0.5"}}
          type="number"
          placeholder="Amount"
          required
          onChange={(e) => {
            const crrValue: number = Number(e.target.value);

            if (currentBalance >= crrValue) {
              setFinalAmount(crrValue)
            }
             else {
              dispatch(
                getMessage(
                  "Sorry!. Your Buget cant be More than The current Balance"
                )
              );
              dispatch(selectDialog("error"));
              dispatch(openCloseDialog());
            }
          }}
        ></input>

        <motion.button
          className="p-0"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            type: "tween", 
            ease: "linear"
          }}
          onClick={()=> 
            {
            closing()
            }}
        >
          <ArrowPathIcon className="w-4 h-4 text-green-500 m-2" />

        </motion.button>
      </div>
)
}