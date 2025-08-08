import LinkBtns from '../ui/linksBtns'
import { 
  HomeIcon,
  ArrowsUpDownIcon,
  ChartPieIcon,
  DocumentCurrencyDollarIcon,
  ReceiptRefundIcon
} from '@heroicons/react/20/solid';

export default function DashNav(){
  return(
    <nav className='flex flex-col'>

<LinkBtns pageUrl="/pages/home" 
linkText="Overview" 
icon={
<HomeIcon />
} />

<LinkBtns pageUrl="/pages/transactions" 
linkText="Transactions" 
icon={
<ArrowsUpDownIcon />
} />

<LinkBtns pageUrl="/pages/budget" 
linkText="Budget" 
icon={
<ChartPieIcon />
} />

<LinkBtns pageUrl="/pages/pots" 
linkText="Pots" 
icon={
<DocumentCurrencyDollarIcon />
} />

<LinkBtns pageUrl="/pages/bills" 
linkText="Recurring Bills" 
icon={
<ReceiptRefundIcon className='w-5 h-5 mr-2'/>
} />

    </nav>
  )
}