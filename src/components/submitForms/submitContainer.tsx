import TransactionSubmit from "./submitTransaction"
import SubmitBills from "./submiBills"
import SubmitBudget from "./submitBudget"
import { useSelector } from "react-redux"
import { useState, useEffect } from "react"
import type { RootState } from "../../state management/store"

export default function SubmitContainer(){

const openSubmition = useSelector((state: RootState) => state.submit.openToSubmit)
const selectedForm = useSelector((state: RootState)=> state.selectedSubmittion.selectedSubmit)

const [open, setOpen] = useState(false)
const [selectedForm1, setForm] = useState("transaction")

useEffect(()=>{
    setOpen(openSubmition)
    setForm(selectedForm)
},[openSubmition, selectedForm])

    return(

<div className={`${open ? "block" : "hidden"} absolute w-screen h-screen bg-black/50 z-40 overflow-hidden`}>
<h1 className="text-white text-center text-5xl m-2 ">{selectedForm1.toUpperCase()}</h1>

{selectedForm1 === 'transaction' && <TransactionSubmit /> }
{selectedForm1 === "bills" && <SubmitBills />}
{selectedForm1 === "budget" && <SubmitBudget /> }

</div>
    )
}