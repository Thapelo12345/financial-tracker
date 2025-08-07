"use client";
import MiniHeader from "../ui/overviewUi/minHeader";
import MiniDetailsBtn from "../ui/overviewUi/detailsBtn";

export default function MiniRecurringBills() {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <MiniHeader title={"Recurring Bills"} />
        <MiniDetailsBtn />
      </div>
    </div>
  );
}
