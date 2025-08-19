import LabelInput from "../ui/form/labelInput"
// import LabelInputNumber from "../ui/submitionForm/labelInputNumber";
import LabelInputText from "../ui/submitionForm/labelInputText";
import { useDispatch } from "react-redux";
import { onOffSubmit } from "../../state management/openSubmition";
import { useState } from "react"

type Bills = string[];

const bills: Bills = [
"Housing", "Utilities", "Insurance", "Loans & Debt", "Subscriptions", "Transportation", "Healthcare", "Childcare & Education", "Business Expenses"
];

export default function SubmitBills(){

  const dispatch = useDispatch()

    const [name, setName] = useState("")
    const [amount, setAmount] = useState("")
    const [date, setDate] = useState("")
    const [startDate, setStateDate] = useState("")

    return(
<div className="absolute w-screen h-screen overflow-y-auto z-50">
    <form className="w-[70%] md:w-1/2 bg-black/50 m-auto p-2 rounded-lg">


        <LabelInputText 
        animationClass="animate"
        stateValue={name}
        title="title"
        inputType="tex"
        setValue={setName}
        />

        <LabelInput
          InputType="number"
          title="Amount"
          inputedValue={amount}
          sendValue={setAmount}
        />

         <LabelInput
          InputType="date"
          title="Due Date"
          inputedValue={date}
          sendValue={setDate}
        />

         <LabelInput
          InputType="date"
          title="Start date"
          inputedValue={startDate}
          sendValue={setStateDate}
        />

        <div className="w-full bg-black/20 p-2 rounded-lg">
          <label className="text-white text-center block mb-2">
            Select Category
          </label>
          <div className="flex flex-wrap gap-4 m-2">
            {bills.map((bill) => (
              <div key={bill} className="flex items-center gap-2">
                {" "}
                {/* Align items in center with gap */}
                <input
                  type="radio"
                  id={bill}
                  name="category"
                  value={bill}
                />
                <label
                  htmlFor={bill}
                  className="text-white text-sm cursor-pointer p-2"
                >
                  {bill}
                </label>
              </div>
            ))}
          </div>
        </div>
<div className="flex flex-row items-center  justify-evenly w-full">
        <div className="flex flex-col gap-4 items-center m-2">
            <label className="text-white">Frenquently</label>
            <select className="bg-white text-cyan rounded-lg p-1">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
            </select>
        </div>

        <div className="flex flex-col gap-4 items-center m-2">
            <label className="text-white">Status</label>
            <select className="bg-white text-cyan rounded-lg p-1">
            <option value="active">Active</option>
            <option value="pause">Pause</option>
            <option value="cancel">Cancel</option>
            <option value="inactive">Inactive</option>
            </select>
        </div>
</div>

      <div className="flex flex-row items-center justify-evenly w-full p-2">
        <button className="p-2 text-white">Submit</button>
        <button 
        className="p-2 text-white"
        onClick={()=> dispatch(onOffSubmit())}
        >Back</button>

      </div>

    </form>
</div>
    )
}