import PageHeader from '../../components/ui/pageHeader';
import BalanceContainer from '../../components/balanceContainer'
import BudgetCard from '../../components/ui/budgetCard'

export default function Pots() {
  return (
    <main className="m-2 p-4 w-screen h-screen overflow-y-auto"
     style={{ backgroundColor: 'whitesmoke' }}
     >
      <PageHeader title="Pots" />

      <div className="flex flex-col md:flex-row w-full justify-start p-2">
      <BalanceContainer title='Pots Value' amount={368.45}/>
      </div>

      <div className='flex flex-row flex-wrap justify-start w-full'>
<BudgetCard  title='Gift cards' amount='500'/>
<BudgetCard  title='Savings' amount='12 000'/>
<BudgetCard  title='Voucher' amount='300'/>


      </div>
    </main>
  );
}
