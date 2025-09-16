import { useContext } from "react";
import { BillContext, LoadContext } from "../../submitForms/billsFunctions/billContext";

type Props = {
  pay: boolean;
  setAutoPay:(value: boolean) => void;
}
export default function AutoPayButton({ pay, setAutoPay}:Props) {
    const theme = useContext(BillContext)
    const loading = useContext(LoadContext)

  return (
    <div
      className="relative border-2 border-white m-0 p-0 rounded-lg flex flex-row"
      style={{
        boxShadow: "0px 1px 1px black, inset 1px 1px 5px black",
      }}
      onClick={() => {
        loading.load(true)
        setAutoPay(!pay)
      }}
    >
      <div
        className={`
               absolute ${
                 pay ? "left-1" : "left-8"
               } transition-all duration-300 top-1 rounded-lg bg-green-100 w-1/2 h-[80%] 
                `}
        style={{backgroundColor: theme.backGround}}
      ></div>
      <div
        className="text-xs text-white font-bold bg-gray-400 rounded-lg p-1 m-1"
        style={{ boxShadow: "inset 1px 1px 3px white" }}
      >
        Off
      </div>
      <div
        className="text-xs text-white font-bold bg-green-400 rounded-lg p-1 m-1"
        style={{ boxShadow: "inset 1px 1px 3px white" }}
      >
        On
      </div>
    </div>
  );
}
