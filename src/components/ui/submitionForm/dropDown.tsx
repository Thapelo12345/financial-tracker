type Props = {
  title: string;
  items: string[];
  setValue: (value: string) => void;
};

export default function DropDown({ title, items, setValue }: Props) {
  return (
    <div className="flex flex-col items-center justify-center w-1/2">
      <label className="text-black/50 font-serif font-extrabold p-2 rounded-tr-lg rounded-br-lg m-2">
        {title}
      </label>
      <select
        className="text-black font-semibold text-xs m-4 focus:outline-0 p-2 rounded-lg"
        style={{
          boxShadow: "inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF",
        }}
        onChange={(e) => setValue(e.target.value)}
      >
        {items.map((item: string) => (
          <option value={item}>{item.toUpperCase()}</option>
        ))}
      </select>
    </div>
  );
}
