"use client";
import MobileLinks from "../ui/mobileLinks";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  HomeIcon,
  ArrowsUpDownIcon,
  ChartPieIcon,
  DocumentCurrencyDollarIcon,
  ReceiptRefundIcon,
} from "@heroicons/react/20/solid";

export default function MobileDash() {
  const currentUrl = usePathname();
  const [currentPage, setCurrentPage] = useState("/");

  useEffect(() => {
    setCurrentPage(currentUrl);
  }, [currentUrl]);

  return (
    <header
      className=
      {`fixed z-10 bottom-0 left-0 bg-[rgb(13,13,13)] flex flex-row justify-evenly w-full rounded-none h-auto ${currentPage === "/" ? "hidden" : "block"}`}
    >
      <nav className="w-full flex flex-row justify-evenly items-start">

        <MobileLinks pageUrl={"/pages/home"} toolTip={"Overview"} icon={<HomeIcon />} />

        <MobileLinks
          pageUrl={"/pages/transactions"}
          toolTip={"Transactions"}
          icon={<ArrowsUpDownIcon />}
        />

        <MobileLinks
          pageUrl={"/pages/budget"}
          toolTip={"Budgets"}
          icon={<ChartPieIcon />}
        />

        <MobileLinks
          pageUrl={"/pages/pots"}
          toolTip={"Pots"}
          icon={<DocumentCurrencyDollarIcon />}
        />

        <MobileLinks
          pageUrl={"/pages/bills"}
          toolTip={"Bills"}
          icon={<ReceiptRefundIcon />}
        />
      </nav>
    </header>
  );
}
