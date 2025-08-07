"use client"

import MiniHeader from "../ui/overviewUi/minHeader"
import MiniDetailsBtn from "../ui/overviewUi/detailsBtn";
import MiniTable from "./miniTable";

export default function MiniTransaction() {
    return(
        <div>
            <div className="bg-white rounded-lg">

                 <div className="flex flex-row justify-between">
                        <MiniHeader title={"Transaction"} />
                        <MiniDetailsBtn />
                      </div>
        <div className="w-full h-80 p-2">
        <MiniTable />
        </div>

            </div>
        </div>
    )
}