"use client";
import { useId } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  YAxis,
  XAxis,
  Tooltip,
  Cell,
} from "recharts";

type details = {
  DescriptionTitle: string;
  Amount: number;
  Color: string;
};

type GraphDetailsProps = {budgetItem?: details[]};

export default function Barchart({ budgetItem = [] }: GraphDetailsProps) {
  const shadowId = `bar-shadow-${useId().replace(/:/g, "")}`;

  return (
    <div className="w-full  h-[300px] bg-white rounded-lg p-0 md:p-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={budgetItem}
          margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
          barSize={35}
        >
          <defs>
            <filter id={shadowId} x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow
                dx="0"
                dy="3"
                stdDeviation="3"
                floodColor="black"
                floodOpacity="0.2"
              />
            </filter>
          </defs>
          <XAxis
            dataKey="DescriptionTitle"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6b7280", fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6b7280", fontSize: 12 }}
            tickFormatter={(value) => `R ${value}`}
          />
          <Tooltip
            contentStyle={{
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
            formatter={(value) => [`R ${value}`, "Amount"]}
            labelStyle={{ fontWeight: 500, color: "#111827" }}
          />
          <Bar
            dataKey="Amount"
            radius={[4, 4, 0, 0]}
            filter={`url(#${shadowId})`}
          >
            {budgetItem.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.Color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
