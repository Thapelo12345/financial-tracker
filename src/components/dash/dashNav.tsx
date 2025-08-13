import LinkBtns from "../ui/linkBtns";
import {
  HomeIcon,
  ArrowsUpDownIcon,
  ChartPieIcon,
  DocumentCurrencyDollarIcon,
  ReceiptRefundIcon,
} from "@heroicons/react/20/solid";

export default function DashNav() {
  return (
    <nav className="flex flex-col">
      <LinkBtns pageUrl="/home" linkText="Overview" icon={<HomeIcon />} />

      <LinkBtns
        pageUrl="/home/transactions"
        linkText="Transactions"
        icon={<ArrowsUpDownIcon />}
      />

      <LinkBtns
        pageUrl="/home/budget"
        linkText="Budget"
        icon={<ChartPieIcon />}
      />

      <LinkBtns
        pageUrl="/home/pots"
        linkText="Pots"
        icon={<DocumentCurrencyDollarIcon />}
      />

      <LinkBtns
        pageUrl="/home/bills"
        linkText="Recurring Bills"
        icon={<ReceiptRefundIcon className="w-5 h-5 mr-2" />}
      />
    </nav>
  );
}
