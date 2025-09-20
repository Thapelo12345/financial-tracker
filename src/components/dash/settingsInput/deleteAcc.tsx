import SettingsHeader from "../../ui/settings/header"
import { ShieldExclamationIcon } from "@heroicons/react/20/solid"

export default function DeletAccount(){
    return(
        <div className=" flex flex-col bg-[whitesmoke] items-center w-full h-full border-4 border-red-500 rounded-sm"
        style={{boxShadow: "1px 1px 5px black, 0px 9px 20px red"}}
        >
           <SettingsHeader title="delete an account" />

           <div className="flex items-center justify-center w-1/2 h-auto">
            <ShieldExclamationIcon className="w-11 h-11 text-yellow-300"/>
           </div>

           <p className="w-1/2 text-xs p-2">You are about to delete your account permanetly.</p>
           <h1
           className="font-semibold m-2"
           >Are Sure!</h1>

           <button
           className="p-1 m-2 border-2 border-white w-fit h-fit bg-red-400 text-lg text-white rounded-sm cursor-pointer"
           style={{
            boxShadow: "1px 1px 5px black",
            textShadow: "1px 1px 3px black"
           }}
           >
            Yes i am</button>
        </div>
    )
}