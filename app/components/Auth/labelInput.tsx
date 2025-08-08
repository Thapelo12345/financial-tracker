"use client"

type Props = {
    InputType: string;
    title: string;
    sendValue: (value: string) => void;
}

export default function LabelInput({ InputType, title, sendValue }:Props){
    return(
        <div className="flex flex-row items-center justify-center w-full sm:w-[70%] m-1">

            <label
            className="font-semibold w-full p-1 m-0"
            >{title} : </label>
            <input
            className="text-black w-full h-full m-2"
            type={InputType} 
            onChange={(e) => sendValue(e.target.value)}
            required
            ></input>

        </div>
    )
}