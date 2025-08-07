"use client";

import MiniHeader from "../ui/overviewUi/minHeader";
import MiniDetailsBtn from "../ui/overviewUi/detailsBtn";
import MiniPotsCard from "./miniPotCard";
import { DocumentCurrencyDollarIcon } from "@heroicons/react/20/solid";

export default function MiniPots() {
  return (
    <div className="bg-white m-2 p-1 hover:shadow-2xl rounded-lg">

      <div className="flex flex-row justify-between">
        <MiniHeader title={"Pots"} />
        <MiniDetailsBtn />
      </div>

      <div className="h-40 flex flex-row">

        <div className="flex flex-row bg-black/5 w-1/2 h-full rounded-lg ">
          <DocumentCurrencyDollarIcon className=" text-green-400 w-full h-full m-2" />

          <div className="flex flex-col w-full justify-center pb-5">
            <h4 className="text-xs font-medium text-black text-black/50 m-2">Total Saving</h4>
            <label className="text-xs font-extrabold text-black">R12 000</label>
          </div>

        </div>

{/* details container */}
        <div className="flex flex-row flex-wrap gap-1 w-full p-0 overflow-hidden">
<MiniPotsCard title="Savings" amount="R 12 000" color={'green'}/>
<MiniPotsCard title="Gift Cards" amount="R 5000" color={'cyan'}/>    
<MiniPotsCard title="Vouchers" amount="R 330" color={'orange'}/>
        </div>
      </div>
    </div>
  );
}
