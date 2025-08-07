"use client"

import { PencilIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion'

type Props = {
  title: string;
  amount: string;
};

export default function BudgetCard({ title, amount }: Props) {
  return (
    <motion.div className="flex flex-col item-center w-[30%] sm:w-40 h-[15%] bg-white m-2 p-2  rounded-md 
    "
    style={{
      backgroundImage: 'linear-gradient(0deg, black, rgba(0, 0, 0, 0.2))'
      // backgroundColor: 'white'
    }}
    whileHover ={{
      boxShadow: '1px 3px 30px blue',
      border: '1px solid cyan',
      backgroundImage: 'linear-gradient(0deg, blue, cyan)',
      scale: 1.05
    }}

    transition={{
    type: 'spring',
    stiffness: 300,
    damping: 10,
    bounce: 0.5,
    duration: 1.5
    }}
    >
      <label className="text-center text-white font-bold"> {title} </label>

      <data className='text-white font-bold'>R {amount}</data>

     
    </motion.div>
  );
}
