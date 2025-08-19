
type Prop ={
    title:string;
    inputType:string;
    stateValue:number;
    setValue:(value: number) => void;
}
export default function LabelInputNumber({ title, inputType, stateValue, setValue}:Prop){
    return(
        <div className="flex flex-col items-start w-[90%]">

            <label
            className={`text-white bg-black/80 rounded-xs m-2 font-bold text-lg p-2`}
            >{title}
            </label>

            <input 
            value={stateValue}
            type={inputType}
            onChange={(e) => setValue(Number(e.target.value))}
            className="rounded-md w-full p-2 border-2 border-black/10 focus:outline-0 focus:border-2 focus:border-green-700"
             required
             >
             </input>   

        </div>
    )
}