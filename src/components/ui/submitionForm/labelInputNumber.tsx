
type Prop ={
    title:string;
    inputType:string;
    setValue:(value: number) => void;
}
export default function LabelInputNumber({ title, inputType, setValue}:Prop){
    return(
        <div className="flex flex-col items-start w-[90%] m-2">

            <label
            className={`w-full text-black font-serif font-extrabold  rounded-tr-lg rounded-br-lg m-2 text-lg p-2`}
            >
<input 
            // value={stateValue}
            type={inputType}
            placeholder={title}
            onChange={(e) => setValue(Number(e.target.value))}
            className="text-black text-sm bg-white/40 rounded-md w-full p-2 border-0 focus:outline-0 focus:shadow-lg focus:shadow-black"
            style={{boxShadow: "inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF"}}
            required
             >
             </input>   
            </label>

            

        </div>
    )
}