
type Props = {
  title: string;
  value: string;
};
export default function BillLabel({ title, value }: Props) {

  return (
    <label className="tablelabels bg-white text-white text-md p-2 m-1 rounded-md"
    style={{
      textShadow: "1px 0px 2px black",
      boxShadow: "0px 5px 8px rgba(0, 0, 0, 0.1)",
      WebkitTextStrokeWidth: "0.1px",
      WebkitTextStrokeColor: "black"
    }}
    >
      {title} : <span 
      style={{
        textShadow: "none"
      }}
      className="text-black text-xs font-serif font-bold"
      > 
      {value.toUpperCase()}
      </span>
    </label>
  );
}
