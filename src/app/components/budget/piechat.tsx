"use client";
import { useId } from "react";
import { ResponsiveContainer, Cell, Pie, PieChart } from "recharts";

type details = {
  DescriptionTitle: string;
  Amount: number;
  Color: string;
};

type GraphDetailsProps = {
  amount: number;
  budgetItem?: details[]; // Make it optional with a default value
};

export default function Piechart({
  budgetItem = [],
  amount,
}: GraphDetailsProps) {
  const shadowId = `pie-shadow-${useId().replace(/:/g, "")}`;

  return (
    <div className="flex items-center justify-center w-full  h-[300px] md:h-full">
      <div className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <defs>
              <filter id={shadowId} x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow
                  dx="0"
                  dy="3"
                  stdDeviation="3"
                  floodColor="#000000"
                  floodOpacity="0.2"
                />
              </filter>
            </defs>
            <Pie
              data={budgetItem}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={85}
              paddingAngle={5}
              dataKey="Amount"
            >
              {budgetItem.map((entry) => (
                <Cell
                  key={`cell-${entry.DescriptionTitle}`}
                  fill={entry.Color}
                  filter={`url(#${shadowId})`}
                />
              ))}
            </Pie>

            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={16}
              fontWeight="bold"
              fill="#333"
            >
              R {amount}
            </text>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
