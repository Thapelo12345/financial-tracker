import MiniHeader from "./minHeader";
import MiniDetailsBtn from "./miniDetailsBtn";
import MiniPotsCard from "./miniPotCard";
import { DocumentCurrencyDollarIcon } from "@heroicons/react/20/solid";

type Prop = {
  animate: string
}

export default function MiniPots({animate}:Prop) {
  return (
    <div className={`bg-white m-4 p-2 hover:shadow-2xl rounded-lg ${animate}`}>
      <div className="flex flex-row justify-between">
        <MiniHeader title={"Pots"} />
        <MiniDetailsBtn pageUrl="/home/pots"/>
      </div>

      <div className="h-40 flex flex-row">
        <div className="flex flex-row bg-black/5 w-[80%] rounded-lg p-0">
          <DocumentCurrencyDollarIcon className=" text-green-400 w-20 h-20 mr-1 self-center" />

          <div className="flex flex-col w-full justify-center">
            <h4 className="text-sm font-medium text-black text-black/50 mb-2">
              Total Saving
            </h4>
            <label className="text-md md:text-md font-extrabold text-black">
              R12 000
            </label>
          </div>
        </div>

        {/* details container */}
        <div className="flex flex-row flex-wrap w-full p-0 overflow-hidden">
          <MiniPotsCard title="Savings" amount="R 12 000" color={"green"} />
          <MiniPotsCard title="Gift Cards" amount="R 5000" color={"cyan"} />
          <MiniPotsCard title="Vouchers" amount="R 330" color={"orange"} />
        </div>
      </div>
    </div>
  );
}