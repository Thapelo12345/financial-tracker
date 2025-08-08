"use client";

import MiniHeader from "../ui/overviewUi/minHeader";
import MiniDetailsBtn from "../ui/overviewUi/detailsBtn";
import MiniBillsCell from "./minBillCell";

type Prop = {
  animate: string;
};
export default function MiniBills({ animate }: Prop) {
  return (
    <div className={`w-full bg-white m-2 rounded-lg ${animate}`}>
      <div className="flex flex-row justify-between">
        <MiniHeader title={"Recurring Bills"} />
        <MiniDetailsBtn />
      </div>

      <div className="flex flex-col w-full p-2">

<MiniBillsCell title="Paid Bills" color="lime" amount={13.56}/>
<MiniBillsCell title="Bills Due" color="hotpink" amount={120.56}/>
<MiniBillsCell title="Upcoming Bills" color="cyan" amount={223.56}/>



      </div>
    </div>
  );
}
