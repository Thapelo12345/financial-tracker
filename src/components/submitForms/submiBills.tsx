import DateInput from "../ui/submitionForm/dateInputs";
import DropDown from "../ui/submitionForm/dropDown";
import LabelInputNumber from "../ui/submitionForm/labelInputNumber";
import LabelInputText from "../ui/submitionForm/labelInputText";
import { useDispatch } from "react-redux";
import { onOffSubmit } from "../../state management/openSubmition";
import { useState } from "react";

type Bills = string[];
type Frequent = string[];
type Status = string[];

const bills: Bills = [
  "Housing",
  "Utilities",
  "Insurance",
  "Loans & Debt",
  "Subscriptions",
  "Transportation",
  "Healthcare",
  "Childcare & Education",
  "Business Expenses",
];

const frenquent: Frequent = ["daily", "weekly", "monthly", "yearly"];

const status: Status = ["active", "pause", "cancel", "inactive"];

export default function SubmitBills() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Housing");
  const [Frenquently, setFrenquently] = useState("daily");
  const [state, setStatus] = useState("inactive");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [startDate, setStateDate] = useState("");

  return (
    <div className="absolute w-screen h-screen overflow-y-auto z-50">
      <form className="w-[70%] md:w-1/2 bg-[whitesmoke] m-auto mb-24 p-2 rounded-lg">
        <h1 className="text-black/50 text-2xl font-serif text-center font-bold">
          Add Bill
        </h1>

        <LabelInputText
          stateValue={name}
          title="Title"
          inputType="tex"
          setValue={setName}
        />

        <LabelInputNumber
          inputType="number"
          title="Amount"
          setValue={setAmount}
        />

        <DateInput title="Due Date" state={date} setValue={setDate} />

        <DateInput
          title="Start Date"
          state={startDate}
          setValue={setStateDate}
        />

        <div className="flex flex-col sm:flex-row items-center justify-evenly w-full">

          <DropDown title="Category" items={bills} setValue={setCategory} />

          <DropDown
            title="Frenquently"
            items={frenquent}
            setValue={setFrenquently}
          />

          <DropDown title="Status" items={status} setValue={setStatus} />
        </div>

        <div className="flex flex-row items-center justify-evenly w-full p-2">
          <button
            type="submit"
            className="text-green-700 font-medium p-2 w-fit rounded-sm cursor-pointer"
          >
            Submitt
          </button>

          <button
            className="text-red-700 font-medium p-2 w-fit rounded-sm cursor-pointer"
            type="button"
            onClick={() => dispatch(onOffSubmit())}
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
}
