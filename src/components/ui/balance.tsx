import BalanceContainer from './balanceContainer'
import { useSelector } from 'react-redux';
import type { RootState } from '../../state management/store';
import { useState, useEffect } from 'react'

export default function Balances(){

  const checkUpdate = useSelector((state: RootState) => state.updateApp.updateApp);

  const [currentBalance, setCurrentBalance] = useState(0.00);
  const [income, setIncome] = useState(0.00)
  const [expense, setExpense] = useState(0.00)

  useEffect(()=>{
    const data = localStorage.getItem("currentUser")

    if(data){
      const currentUser = JSON.parse(data)
      setCurrentBalance(currentUser.currentBalance)
      setIncome(currentUser.income)
      setExpense(currentUser.expense)
    }
  },[checkUpdate])

  return(
    <div className='flex flex-col sm:flex-row w-full'>

<BalanceContainer title='current balance' amount={currentBalance} />
<BalanceContainer title='Income' amount={income} />
<BalanceContainer title='Expenses' amount={expense} />

    </div>
  )
}