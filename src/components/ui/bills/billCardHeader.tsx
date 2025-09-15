import { BillContext } from "../../submitForms/billsFunctions/billContext";
import BillStatusButton from "./billStatusBtn";
import { useContext } from "react";

type Prop = {
  name: string;
  installment: number;
};
export default function BillCardHeader({ name, installment }: Prop) {
  const theme = useContext(BillContext);
  return (
    <header className="flex flex-row items-center justify-between [perspective:1000px] p-2">
      <div className="flex flex-col">
        <h1
          className="text-sm text-white font-extrabold p-2 rounded-md border-4 border-white w-fit h-fit "
          style={{
            backgroundColor: theme.headColor,
            textShadow: "2px 0px 2px black",
            boxShadow: "inset 1px 1px 5px black",
          }}
        >
          {name.toUpperCase()}
        </h1>
        <h2
          className="text-xs text-white font-extrabold w-fit h-fit p-2 rounded-md border-4 border-white"
          style={{
            backgroundColor: theme.headColor,
            textShadow: "2px 0px 2px black",
            boxShadow: "inset 1px 1px 5px black",
          }}
        >
          R {installment}
        </h2>
      </div>

      <BillStatusButton />
      
    </header>
  );
}
