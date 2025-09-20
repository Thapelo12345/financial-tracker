import MobileLinks from "../ui/mobileLinks";
import { useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { SettingsContext } from "./settingsContext";
import {
  HomeIcon,
  ArrowsUpDownIcon,
  ChartPieIcon,
  DocumentCurrencyDollarIcon,
  ReceiptRefundIcon,
  ChevronDoubleUpIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/20/solid";
import MobileSettings from "./mobileSettings";

export default function MobileDash() {

  const settings = useContext(SettingsContext)

  const location = useLocation();
  const currentUrl = location.pathname;
  const [currentPage, setCurrentPage] = useState("/");

  useEffect(() => {
    setCurrentPage(currentUrl);
  }, [currentUrl]);

  return (
    <header
      className={`fixed z-50 bottom-0 left-0 bg-[rgb(13,13,13)] flex flex-row justify-evenly w-full rounded-none h-auto ${
        currentPage === "/" ? "hidden" : "block"
      }`}
    >
      <nav className="w-full flex flex-row justify-evenly items-start">
        <MobileLinks
          pageUrl={"/home"}
          toolTip={"Overview"}
          icon={<HomeIcon />}
        />

        <MobileLinks
          pageUrl={"/home/transactions"}
          toolTip={"Transactions"}
          icon={<ArrowsUpDownIcon />}
        />

        <MobileLinks
          pageUrl={"/home/budget"}
          toolTip={"Budgets"}
          icon={<ChartPieIcon />}
        />

        <MobileLinks
          pageUrl={"/home/pots"}
          toolTip={"Pots"}
          icon={<DocumentCurrencyDollarIcon />}
        />

        <MobileLinks
          pageUrl={"/home/bills"}
          toolTip={"Bills"}
          icon={<ReceiptRefundIcon />}
        />

        <MobileSettings />

        <button
        className="text-white m-1 bg-black/90 p-2 absolute left-0 bottom-13 rounded-sm z-20"
        onClick={()=>{
          settings.setSettingsInput(!settings.settingsInput)
          settings.closeSettings(!settings.currentValue)
        }}
        >
          {!settings.currentValue && <ChevronDoubleUpIcon className="font-semibold w-4 h-4"/>}
          {settings.currentValue && <ChevronDoubleDownIcon className="font-semibold w-4 h-4"/>}
        </button>
      </nav>
    </header>
  );
}
