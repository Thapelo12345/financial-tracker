import BalanceContainer from './balanceContainer'

export default function Balances(){
  return(
    <div className='flex flex-col sm:flex-row w-full'>

<BalanceContainer title='current balance' amount={289.45} />
<BalanceContainer title='Income' amount={389.45} />
<BalanceContainer title='Expenses' amount={39.45} />

    </div>
  )
}