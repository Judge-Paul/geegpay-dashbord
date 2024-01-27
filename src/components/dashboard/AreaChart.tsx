import { ResponsiveContainer, Area, AreaChart } from "recharts";
import { TrendData } from "@/lib/data";

interface ChartProps {
  data: TrendData[];
  stroke?: string;
  fill?: string;
}

export default function Chart({ data, stroke, fill }: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      {/* <LineChart width={500} height={300} data={data}>
        <Line type="monotone" dot={false} dataKey="value" stroke="#82ca9d" />
      </LineChart> */}
      <AreaChart data={data}>
        <Area type="monotone" dataKey="value" stroke={stroke} fill={fill} />
      </AreaChart>
    </ResponsiveContainer>
  );
}
