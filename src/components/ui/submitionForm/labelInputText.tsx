type Prop ={
    title:string;
    inputType:string;
    stateValue:string;
    setValue:(value: string) => void;
}

export default function LabelInputText({title, inputType, stateValue, setValue}:Prop){
    return(
        <div className="flex flex-col items-start w-[90%] m-2">
            <label
            className={`text-black w-full font-serif rounded-tr-lg rounded-br-lg m-2 font-extrabold text-lg p-2`}

            >
             <input 
            value={stateValue}
            type={inputType}
            onChange={(e) => setValue(e.target.value)}
            placeholder={title}
            className="text-green-700 text-sm bg-white/40 rounded-md w-full p-2 border-0 focus:outline-0"
            style={{boxShadow: "inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF"}}
             required
             ></input>

            </label>

           

        </div>
    )
}