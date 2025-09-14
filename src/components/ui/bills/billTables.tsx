import BillLabel from "../billLabel";

type Props = {
    category: string;
    duration: string;
    dueDate: string;
    startDate: string;
    frenquently: string;
}

export default function BillTables({category, duration, dueDate,startDate,frenquently}:Props){
    return(
    <div className="flex flex-row">

        <div className="flex flex-col w-1/2 p-2 h-full">
        <BillLabel title="Category" value={category} />
        <BillLabel title="Duration" value={duration}/>
        <BillLabel title="Due Date" value={dueDate} />

        </div>
        <div className="flex flex-col w-1/2 p-2 h-full">
        <BillLabel title="Start Date" value={startDate} />
        <BillLabel title="Frenquently" value={frenquently} />
        </div> 
    </div>
    )
}