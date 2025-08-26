import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../state management/store";
import { useDispatch } from "react-redux";
import { selectDialog } from "../../../state management/selectDialog";
import { getMessage } from "../../../state management/dialogMessage";
import { openCloseDialog } from "../../../state management/openCloseDialog";

type Props = {
  title: string;
  setAmount: (value: number) => void;
  close: (value: boolean) => void;
};

export default function BudgetInputAmount({ title, setAmount, close }: Props) {
  const dispatch = useDispatch();
  const checkUpdate = useSelector(
    (state: RootState) => state.updateApp.updateApp
  );
  const [currentBalance, setCurrentBalance] = useState(0);

  useEffect(() => {
    const data = localStorage.getItem("currentUser");

    if (data) {
      const currentUser = JSON.parse(data);
      setCurrentBalance(currentUser.currentBalance);
    }
  }, [checkUpdate]);

  return (
    <motion.div
      className="main-header overflow-x-hidden shadow-md transition-all duration-100 ease-in-out group flex flex-col items-center bg-white w-1/2 sm:w-1/3 md:w-1/6 m-2 p-2 md:p-4 rounded-[10px]"
      whileHover={{
        scale: 1,
        zIndex: 10,
        boxShadow: "1px 9px 20px rgba(0,0,0,0.7)",
        backgroundColor: "rgba(0,0,0,0.8)",
      }}
    >
      <h4 className="group-hover:text-white text-black text-xs font-light">
        {title}
      </h4>

      <div className="w-full m-2 p-1">
        <input
          className="p-1 text-xs w-1/2 bg-[whitesmoke] rounded-lg focus:outline-0 overflow-hidden"
          type="number"
          required
          onChange={(e) => {
            const crrValue: number = Number(e.target.value);

            if (currentBalance >= crrValue) {
              setAmount(Number(crrValue));
            } else {
              dispatch(
                getMessage(
                  "Sorry!. Your Buget cant be More than The current Balance"
                )
              );
              dispatch(selectDialog("error"));
              dispatch(openCloseDialog());
              setAmount(0);
            }
          }}
        ></input>

        <button
          className="p-2"
          onClick={() => {
            close(false);
          }}
        >
          Update
        </button>
      </div>
    </motion.div>
  );
}
