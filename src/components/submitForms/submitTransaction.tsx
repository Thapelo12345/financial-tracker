import LabelInputText from "../ui/submitionForm/labelInputText";
import LabelInputNumber from "../ui/submitionForm/labelInputNumber";
import { useDispatch } from "react-redux";
import { onOffSubmit } from "../../state management/openSubmition";
import { useState } from "react";
import AddTransaction from "./AddTransaction";

type Categories = string[];

const categories: Categories = [
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
  const [transactionType, setTransactionType] = useState("Income")
  const [amount, setAmount] = useState(0.0);
  const [description, setDescription] = useState("")
  const [selectedCategory, setCategory] = useState("")

  return (
    <div className="absolute w-screen h-screen overflow-y-auto">

      <form 
      onSubmit={(e)=>{
        e.preventDefault();
        AddTransaction({
          Name: name,
          Amount: amount,
          Category: selectedCategory,
          Description: description,
          TransactionType: transactionType
        });
        
        dispatch(onOffSubmit());
        setName("");
        setAmount(0);
        setDescription("");
        setCategory("");
        setTransactionType("");
      }}

      className="flex flex-col w[70%] md:w-1/2 items-start bg-white self-center justify-self-center mb-20 p-2 rounded-lg">
     

        <LabelInputText
         title="Title" 
         inputType="text"
         stateValue={name}
         setValue={setName}
          />


          <LabelInputNumber
          inputType="number"
          title="amount"
          stateValue={amount}
          setValue={setAmount}
          />

        <div className="w-full m-4 flex flex-row items-center">
          <label className="text-white bg-black/80 rounded-sm m-2 p-2 font-bold">Description</label>
          <textarea 
          className="text-xs bg-white border-2 border-black/10 rounded-lg ml-[23%] h-15 w-50 focus:outline-0 focus:border-2 focus:border-green-700 p-2"
          value={description}
          onChange={(e)=> setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="w-full p-2 rounded-lg">
          <label className="text-white font-bold w-fit p-2 self-center rounded-sm m-auto bg-black/80 text-center block mb-2">
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
                  onChange={(e) => setCategory(e.target.value)}
                />
                <label
                  htmlFor={category}
                  className="text-green-600 font-bold text-sm cursor-pointer p-2"
                >
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className=" flex flex-col items-center justify-center w-full">
          <label className="text-white font-bold bg-black/80 p-2 rounded-sm m-2">Select transaction Type</label>

          <select 
          className="text-black m-4 focus:outline-0"
          onChange={(e)=> setTransactionType(e.target.value)}
          required
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>

        <div className="flex flex-row items-center justify-evenly w-full p-2">
          <button 
          type="submit"
          className="text-white bg-green-700 p-2 w-fit rounded-sm hover:shadow-lg hover:shadow-black/70"
          
          >Submitt</button>

          <button 
          className="text-white bg-green-700 p-2 w-fit rounded-sm hover:shadow-lg hover:shadow-black/70"
          type="button"
          onClick={()=> dispatch(onOffSubmit())}
          >Back</button>
        </div>
      </form>
    </div>
  );
}
