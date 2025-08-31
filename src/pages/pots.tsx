import PageHeader from "../components/ui/pageHeader";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import BalanceContainer from "../components/ui/balanceContainer";
import PotsCard from "../components/pots/potCard";
import { useState, useEffect } from "react";

export default function Pots() {
  const [postValue, setpotValue] = useState(0);
  const [giftCard, setGiftCard] = useState(0);
  const [voucher, setVoucher] = useState(0);
  const [saving, setSaving] = useState(0);

  useEffect(()=>{
    setpotValue(0)
    setpotValue(giftCard + voucher + saving)
  }, [giftCard, voucher, saving])

  useEffect(() => {
    const data = sessionStorage.getItem("currentUser");

    if (data) {
      const user = JSON.parse(data);

      setpotValue(user.potsValue);
      setGiftCard(user.giftCard);
      setVoucher(user.vouchers);
      setSaving(user.savings);
    }
  }, []);

  return (
    <main className="m-2 p-4 w-screen h-screen overflow-y-auto">
      <PageHeader title="Pots" />

      <div className="flex flex-col md:flex-row w-full justify-start p-2">
        <BalanceContainer
          activeClick={false}
          title="Pots Value"
          amount={postValue}
        />
      </div>

      <div
        className="flex flex-col sm:flex-row flex-wrap justify-start w-full"
        style={{ perspective: "1000px" }}
      >
        <PotsCard title="Gift cards" amount={giftCard} getAmount={setGiftCard} />
        <PotsCard title="Savings" amount={saving} getAmount={setSaving} />
        <PotsCard title="Voucher" amount={voucher} getAmount={setVoucher} />
        <button className="relative group w-15 h-15 m-2 p-2 ">
          <PlusCircleIcon className="w-10 h-10 text-green-400" />
          <div
           className="hidden group-hover:block border-2 border-[cyan] shadow-2xl bg-green-400 absolute bottom-16 left-0 w-40 rounded-lg"
           style={{
            boxShadow: "1px 3px 30px blue",
           border: "1px solid cyan",
            backgroundImage: "linear-gradient(0deg, blue, cyan)",
           }}
           >
            <span 
            className="text-white"
            style={{
              textShadow: "1px 1px 2px black"
            }}
            >Add custom Pot</span>
          </div>
        </button>
      </div>
    </main>
  );
}
