import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";

type Props = {
  title: string;
  amount: number;
  actOnClick?: () => void; // Optional click handler
};

export default function BalanceContainer({ title, amount, actOnClick }: Props) {
  useGSAP(() => {
    gsap.fromTo(
      ".main-header",
      {
        scale: 0.1,
      },
      {
        scale: 1,
        duration: 0.6,
        ease: "spring(1, 0.5, 0, 1)",
        stagger: 0.2,
      }
    );
  });

  const handleClick = () => {
    if (actOnClick) {
      actOnClick();
    }
  };

  return (
    <motion.div
      className="main-header overflow-x-auto shadow-md transition-all duration-100 ease-in-out group flex flex-col items-center bg-white w-1/2 sm:w-1/3 md:w-1/6 m-2 p-2 md:p-4 rounded-[10px]"
      whileHover={{
        scale: 1,
        zIndex: 10,
        boxShadow: "1px 9px 20px rgba(0,0,0,0.7)",
        backgroundColor: "rgba(0,0,0,0.8)",
      }}
      onClick={handleClick}
      style={{ cursor: actOnClick ? "pointer" : "default" }}
    >
      <h4 className="group-hover:text-white text-black text-xs font-light">
        {title}
      </h4>
      <h2 className="group-hover:text-white text-black font-medium text-lg truncate">
        R {amount}
      </h2>
    </motion.div>
  );
}