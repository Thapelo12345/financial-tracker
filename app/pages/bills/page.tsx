import BalanceContainer from '@/app/components/balanceContainer';
import PageHeader from '../../components/ui/pageHeader';

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

<div className='border w-[98%] h-[60%]'>
  
</div>

    </main>
  );
}
