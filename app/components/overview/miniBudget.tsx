import MiniHeader from "../ui/overviewUi/minHeader";
import MiniDetailsBtn from "../ui/overviewUi/detailsBtn";
import MiniPiechart from "../budget/miniPieChart";
import MiniDetails from "../budget/miniDetails";

type Prop = {
  animate: string;
};

export default function MiniBudget({ animate }: Prop) {
  return (
    <div className={`w-full h-[85%] ${animate}`}>
      <div className="flex flex-row justify-between">
        <MiniHeader title={"Budget"} />
        <MiniDetailsBtn />
      </div>

      <div className="flex flex-col lg:flex-row w-full h-full">
        <div className="flex items-center justify-center w-full lg:w-[50%] h-1/2 lg:h-full m-1">
          <MiniPiechart />
        </div>

        <div className="w-full lg:w-1/2 h-1/2 lg:h-full m-1">
          <MiniDetails />
        </div>
      </div>
    </div>
  );
}
