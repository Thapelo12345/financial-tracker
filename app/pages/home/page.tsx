import PageHeader from "@/app/components/ui/pageHeader";
import Balances from "@/app/components/balances";
import Widgets from "@/app/components/overview/widgetContainer";

export default function Home() {
  return (
    <div className="m-0 p-4 bg-white/50 w-screen h-screen overflow-y-auto">
      <PageHeader title="Overview" />
      <Balances />

     <Widgets />
     
    </div>
  );
}
