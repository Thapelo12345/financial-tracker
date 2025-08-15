import PageHeader from "../components/ui/pageHeader";
import BalanceContainer from "../components/ui/balanceContainer";
import PotsCard from "../components/pots/potCard";
import { useState, useEffect } from "react";

export default function Pots() {

  const [postValue, setpotValue] = useState(0)
  const [giftCard, setGiftCard] = useState(0)
  const [voucher, setVoucher] = useState(0)
  const [saving, setSaving] = useState(0)

  useEffect(()=>{
    const data = localStorage.getItem("currentUser")

    if(data){
      const user = JSON.parse(data)

      setpotValue(user.potsValue)
      setGiftCard(user.giftCard)
      setVoucher(user.vouchers)
      setSaving(user.savings)
    }
  },[])

  return (
    <main
      className="m-2 p-4 w-screen h-screen overflow-y-auto"
      style={{ backgroundColor: "whitesmoke" }}
    >
      <PageHeader title="Pots" />

      <div className="flex flex-col md:flex-row w-full justify-start p-2">
        <BalanceContainer title="Pots Value" amount={postValue} />
      </div>

      <div
        className="flex flex-row flex-wrap justify-start w-full"
        style={{ perspective: "1000px" }}
      >
        <PotsCard title="Gift cards" amount={giftCard} />
        <PotsCard title="Savings" amount={saving} />
        <PotsCard title="Voucher" amount={voucher} />
      </div>
    </main>
  );
}
