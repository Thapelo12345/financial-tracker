
import { ResponsiveContainer, Cell, Pie, PieChart } from 'recharts';

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

export default function Piechart() {
  return (
    <div className="flex items-center justify-center w-full md:w-1/2 h-[300px] md:h-full">
      <div className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={graphTransaction}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={85}
              paddingAngle={5}
              dataKey="transactionAmount"
            >
              {graphTransaction.map((entry) => (
                <Cell key={`cell-${entry.description}`} fill={entry.color} />
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
              R 245,34
            </text>

          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
