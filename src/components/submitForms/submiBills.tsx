import DateInput from "../ui/submitionForm/dateInputs";
import DropDown from "../ui/submitionForm/dropDown";
import LabelInputNumber from "../ui/submitionForm/labelInputNumber";
import LabelInputText from "../ui/submitionForm/labelInputText";
import { useDispatch } from "react-redux";
import { onOffSubmit } from "../../state management/openSubmition";
import { useState } from "react";

// type Bills = string[];
// type Frequent = string[];
// type Status = string[];
type SelectioDropDown = string[];

const bills: SelectioDropDown = [
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

const frenquent: SelectioDropDown = ["weekly", "monthly", "yearly"];
const payBefore: SelectioDropDown = [
  "number of days",
  "day every month",
  "date",
];
const status: SelectioDropDown = ["active", "pause", "cancel", "inactive"];
const duration: SelectioDropDown = ["continously", "Set end time"]

export default function SubmitBills() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Housing");
  const [Frenquently, setFrenquently] = useState("daily");
  const [state, setStatus] = useState("inactive");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [payBeforeValue, setPayBeforeValue] = useState<string | number>(
    payBefore[0]
  );
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

        <LabelInputText
          stateValue={name}
          title="Description"
          inputType="tex"
          setValue={setName}
        />

        <LabelInputNumber
          inputType="number"
          title="Installment amount"
          setValue={setAmount}
        />

        <DateInput
          title="Start Date"
          state={startDate}
          setValue={setStateDate}
        />

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-evenly w-full">
          <DropDown
            title="Category"
            items={bills}
            setValue={(value) => setCategory(value as string)}
          />

          <DropDown
            title="Frenquently"
            items={frenquent}
            setValue={(value) => setFrenquently(value as string)}
          />

          <DropDown
            title="Duration"
            items={duration}
            setValue={(value) => setFrenquently(value as string)}
          />

          <DropDown
            title="Status"
            items={status}
            setValue={(value) => setStatus(value as string)}
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-evenly w-full">
          <DropDown
            title="Payment before"
            items={payBefore}
            setValue={setPayBeforeValue}
          />

          {payBeforeValue === "number of days" && (
            <div className="w-1/2 h-full mt-13">
              <LabelInputNumber
                inputType="number"
                title="number of days"
                setValue={setAmount}
              />
            </div>
          )}

          {payBeforeValue === "day every month" && (
            <div className="w-1/2 h-full mt-13">
              <LabelInputNumber
                inputType="number"
                title="Day very month"
                setValue={setAmount}
              />
            </div>
          )}
          {payBeforeValue === "date" && (
            <div className="w-1/2 h-full mt-13">
              <DateInput
                title="Due date"
                state={startDate}
                setValue={setStateDate}
              />
            </div>
          )}
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
