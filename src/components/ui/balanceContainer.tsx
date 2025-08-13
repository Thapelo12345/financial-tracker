import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { motion } from 'framer-motion'

type Props = {
  title: string;
  amount: number;
};


export default function BalanceContainer({ title, amount }: Props) {

  useGSAP(() => {
    gsap.fromTo(".main-header", {
      scale: 0.1,
    },
    {
      scale: 1,
      duration: 0.4,
      ease: "bounce",
      stagger: 0.2
    }
  )
  })


    return(
        <motion.div
        className="main-header shadow-md transition-all duration-100 ease-in-out group flex flex-col items-center bg-white w-1/2 sm:w-1/3 md:w-1/6 m-2 p-2 md:p-4 rounded-[10px]"
        whileHover={{
      scale: 1,
      zIndex: 10,
      boxShadow: '1px 9px 20px rgba(0,0,0,0.7)',
      backgroundColor: "rgba(0,0,0,0.8)"
    }}
    >
    <h4
      className='group-hover:text-white text-black text-xs font-light'
      >{title}</h4>
      <h2
      className='group-hover:text-white text-black font-medium text-lg'
      >R {amount}</h2>

        </motion.div>
    )
}