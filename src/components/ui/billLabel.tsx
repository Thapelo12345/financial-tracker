type Props = {
  title: string;
  value: string;
};
export default function BillLabel({ title, value }: Props) {
  return (
    <label className="text-black/50 text-font-bold text-xs p-2">
      {title} :<span className="text-black font-light"> {value}</span>
    </label>
  );
}
