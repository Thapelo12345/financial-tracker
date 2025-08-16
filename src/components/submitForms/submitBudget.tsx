import LabelInput from "../ui/form/labelInput"
import { useDispatch } from "react-redux"
import { onOffSubmit } from "../../state management/openSubmition"
import { useState } from "react"

export default function SubmitBudget(){
const dispatch = useDispatch()

    const [name, setName] = useState("")
    const [color, setColor] = useState("")
    const [amount, setAmount] = useState("")

    return(
     <div className="absolute w-screen h-screen overflow-y-auto z-50">
 <form className="w-[70%] md:w-1/2 bg-black/50 m-auto p-2 rounded-lg">
 <LabelInput
           InputType="text"
           title="Name"
           inputedValue={name}
           sendValue={setName}
         />

          <LabelInput
           InputType="color"
           title="color"
           inputedValue={color}
           sendValue={setColor}
         />

          <LabelInput
           InputType="number"
           title="Amount"
           inputedValue={amount}
           sendValue={setAmount}
         />

         <div className="flex flex-row items-center justify-evenly w-full p-2">
            <button className="text-white p-2">Submit</button>
            <button 
            className="text-white p-2"
            onClick={()=> dispatch(onOffSubmit())}
            >Back</button>
         </div>

</form>
        </div>
    )
}