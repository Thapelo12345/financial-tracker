
type Props = {
  InputType: string;
  title: string;
  inputedValue: string;
  sendValue: (value: string) => void;
};

export default function LabelInput({
InputType,
  title,
  inputedValue,
  sendValue,
}:Props){

return(
<div className="flex flex-row items-center justify-center w-full sm:w-[70%] m-1">
<label className="text-white font-semibold w-full p-1 m-0">{title} : </label>
      <input
        className="bg-white text-black text-sm w-full h-full m-2 p-1 focus:border-blue-500 outline-none hover:shadow-lg focus:rounded-lg"
        type={InputType}
        value={inputedValue}
        onChange={(e) => sendValue(e.target.value)}
        required
      ></input>
</div>
    )
}