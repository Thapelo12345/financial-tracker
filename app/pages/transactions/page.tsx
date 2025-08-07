import PageHeader from '../../components/ui/pageHeader';
import TransactionTable from '@/app/components/transaction/transactionTable';

export default function Transactions() {
  return (
    <main className="flex flex-col w-screen h-screen m-2 p-4 overflow-y-auto"
     style={{ backgroundColor: 'whitesmoke' }}
     >
      <PageHeader title="Transactions" />
 
    <TransactionTable />

    </main>
  );
}
