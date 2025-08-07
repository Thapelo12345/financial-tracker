"use client"

import {ResponsiveContainer, BarChart, Bar, YAxis, XAxis, Tooltip, Cell } from 'recharts';

const graphTransaction = [
  {
    description: 'Entertainment',
    transactionAmount: 54.78,
    color: 'pink'
  },
  {
    description: 'Bills',
    transactionAmount: 74.78,
    color: 'lime'
  },
  {
    description: 'Dining out',
    transactionAmount: 244.43,
    color: 'cyan',
  },
  {
    description: 'Personal care',
    transactionAmount: 80.70,
    color: 'purple'
  }
];

export default function Barchart() {
  return (
    <div className='w-full md:w-1/2 h-1/2 md:h-full m-1 md:p-2 md:m-2'>

     <ResponsiveContainer width="100%" height="100%">
     <BarChart data={graphTransaction}>
          <XAxis />
          <YAxis />
          <Tooltip />
          <Bar dataKey="transactionAmount">
            {graphTransaction.map((entry, index) => (
              <Cell
               key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}