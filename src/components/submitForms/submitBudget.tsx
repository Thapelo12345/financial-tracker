import LabelInputText from "../ui/submitionForm/labelInputText";
import LabelInputNumber from "../ui/submitionForm/labelInputNumber";
import { useDispatch } from "react-redux";
import { onOffSubmit } from "../../state management/openSubmition";
import { useState } from "react";
import { AddBudgetExpense } from "./budgetFunctions/addBudgetExpense";

export default function SubmitBudget() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <div className="absolute w-screen h-screen overflow-y-auto z-50">
      <form 
      className="w-[70%] md:w-1/2 bg-[whitesmoke] m-auto p-2 rounded-lg mt-10"
      onSubmit={(e)=>{
        e.preventDefault()
        dispatch(onOffSubmit())
        AddBudgetExpense(amount, name, color)
      }}
      >
        <h1 className="text-black/50 text-2xl font-serif text-center font-bold">
          Budget Expense
        </h1>

        <LabelInputText
          title="Title"
          inputType="text"
          stateValue={name}
          setValue={setName}
        />
        <LabelInputNumber
          inputType="number"
          title="Amount"
          setValue={setAmount}
        />

        <div className="flex flex-row items-start w-full p-4">
          <input
            type="color"
            onChange={(e) => setColor(e.target.value)}
            placeholder={color}
            className="w-20 h-10 bg-white/40 rounded-md p-5 border-0 focus:outline-0 focus:shadow-lg focus:shadow-black"
            style={{
              boxShadow: "inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF",
            }}
            required
          ></input>
          <label className="text-center text-black/50 text-sm font-semibold font-serif mt-2 ml-4">
            Select Color
          </label>
        </div>

        <div className="flex flex-row items-center justify-evenly w-full p-2">
          <button 
          type="submit"
          className="text-green-700 font-medium p-2 w-fit rounded-sm cursor-pointer"
          >Submitt</button>

          <button 
          className="text-red-700 font-medium p-2 w-fit rounded-sm cursor-pointer"
          type="button"
          onClick={()=> dispatch(onOffSubmit())}
          >Back</button>
        </div>
      </form>
    </div>
  );
}
