import LabelInput from "../ui/form/labelInput";
import { useDispatch } from "react-redux";
import { onOffSubmit } from "../../state management/openSubmition";
import { useState } from "react";

type Categories = string[];

const categories: Categories = [
  "Income",
  "Groceries",
  "Rent",
  "Utilities",
  "Transportation",
  "Entertainment",
  "Dining Out",
  "Healthcare",
  "Education",
  "Shopping",
  "Savings / Investments",
  "Debt Payments",
];

export default function TransactionSubmit() {

  const dispatch = useDispatch()
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <div className="absolute w-screen h-screen overflow-y-auto">

      <form className="flex flex-col w[70%] md:w-1/2 items-start bg-black/50 self-center justify-self-center m-auto p-2 rounded-lg">
        <LabelInput
          InputType="text"
          title="Name"
          inputedValue={name}
          sendValue={setName}
        />

        <LabelInput
          InputType="number"
          title="Amount"
          inputedValue={amount}
          sendValue={setAmount}
        />
        <div className="w-full m-2">
          <label className="text-white ">Description</label>
          <textarea className="bg-white ml-[23%] mt-5 h-10 w-50"></textarea>
        </div>

        <div className="w-full bg-black/20 p-2 rounded-lg">
          <label className="text-white text-center block mb-2">
            Select Category
          </label>
          <div className="flex flex-wrap gap-4 m-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center gap-2">
                {" "}
                {/* Align items in center with gap */}
                <input
                  type="radio"
                  id={category}
                  name="category"
                  value={category}
                />
                <label
                  htmlFor={category}
                  className="text-white text-sm cursor-pointer p-2"
                >
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className=" flex flex-col items-center justify-center w-full">
          <label className="text-white">Select transaction Type</label>

          <select className="text-white m-4">
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>

        <div className="flex flex-row items-center justify-evenly w-full p-2">
          <button className="text-white">Submitt</button>

          <button 
          className="text-white"
          onClick={()=> dispatch(onOffSubmit())}
          >Back</button>
        </div>
      </form>
    </div>
  );
}
