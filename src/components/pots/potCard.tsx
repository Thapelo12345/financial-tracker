

// import { PencilIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type Props = {
  title: string;
  amount: string;
};

export default function PotsCard({ title, amount }: Props) {
  useGSAP(() => {
    gsap.fromTo(
      ".potsCard",
      {
        scale: 0.1,
        opacity: 0.2,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        stagger: 0.4,
      }
    );
  });

  return (
    <motion.div
      className="potsCard flex flex-col item-center w-[30%] sm:w-40 h-[15%] bg-white m-2 p-2  rounded-md"
      style={{
        backgroundImage: "linear-gradient(0deg, black, rgba(0, 0, 0, 0.2))",
      }}
      whileHover={{
        boxShadow: "1px 3px 30px blue",
        border: "1px solid cyan",
        backgroundImage: "linear-gradient(0deg, blue, cyan)",
        scale: 1.05,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 10,
        bounce: 0.5,
        duration: 1.5,
      }}
    >
      <label className="text-center text-white font-bold"> {title} </label>

      <data className="text-white font-bold">R {amount}</data>
    </motion.div>
  );
}
