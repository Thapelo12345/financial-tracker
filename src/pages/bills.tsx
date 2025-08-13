import BalanceContainer from '../components/ui/balanceContainer';
import PageHeader from '../components/ui/pageHeader';
import BillsContainer from '../components/bills/billsContainer';

export default function Bills() {
  return (
    <main className="m-2 p-4 w-screen h-screen overflow-y-auto"
     style={{ backgroundColor: 'whitesmoke' }}
    >
      <PageHeader title="Recurring Bills" />
<div className='flex flex-row flex-wrap justify-start'>
<BalanceContainer title='Paid Bills' amount={30.26} />
<BalanceContainer title='Bills Due' amount={510.76} />
<BalanceContainer title='Upcoming Bills' amount={400.56} />
</div>

<div className='flex flex-row w-screen h-auto overflow-y-auto'>
  <BillsContainer />
</div>

    </main>
  );
}
