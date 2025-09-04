import PageHeader from "../components/ui/pageHeader";
import BalanceContainer from "../components/ui/balanceContainer";
import PotsCard from "../components/pots/potCard";
import { useState, useEffect } from "react";
import AddItemBtn from "../components/ui/addItemBtn";

export default function Pots() {
  const [potValue, setPotValue] = useState(0);
  const [giftCard, setGiftCard] = useState(0);
  const [voucher, setVoucher] = useState(0);
  const [saving, setSaving] = useState(0);


  const addPot = () => {
    console.log("pot added!..")
  }
  useEffect(() => {
    setPotValue(giftCard + voucher + saving);
  }, [giftCard, voucher, saving]);

  useEffect(() => {
    const data = sessionStorage.getItem("currentUser");

    if (data) {
      const user = JSON.parse(data);

      setPotValue(user.potsValue);
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
          amount={potValue}
        />
      </div>

      <div
        className="flex flex-col sm:flex-row flex-wrap justify-start w-full"
        style={{ perspective: "1000px" }}
      >
        <PotsCard title="Gift cards" amount={giftCard} getAmount={setGiftCard} />
        <PotsCard title="Savings" amount={saving} getAmount={setSaving} />
        <PotsCard title="Voucher" amount={voucher} getAmount={setVoucher} />
        
      <AddItemBtn tipText="Add custom pot" btnFunction={addPot} />
      </div>
    </main>
  );
}
