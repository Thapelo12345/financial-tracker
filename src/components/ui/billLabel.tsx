type Props = {
  title: string;
  value: string;
};
export default function BillLabel({ title, value }: Props) {
  return (
    <label className="text-white font-bold text-sm p-2"
    style={{textShadow:"1px 0px 5px black"}}>
      {title} : <span 
      className="text-black font-bold"
      style={{textShadow: "0px 0px 0px black"}}
      > 
      {value}
      </span>
    </label>
  );
}
