// import TransactionSubmit from "./submitTransaction"
// import SubmitBills from "./submiBills"
import SubmitBudget from "./submitBudget"

export default function SubmitContainer(){
    return(
<div className="hidden absolute w-screen h-screen bg-black/50 z-40 overflow-hidden">
<h1 className="text-white text-center text-5xl m-2 ">TRANSACTION</h1>

{/* <TransactionSubmit /> */}
{/* <SubmitBills /> */}
<SubmitBudget />


</div>
    )
}