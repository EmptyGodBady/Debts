import { CategoryScale, Chart } from "chart.js";
import { PieChart } from "@mui/x-charts";

Chart.register(CategoryScale);

export default function DebtsChart() {
  const data = [
    { id: 0, value: 10, label: "Series A" },
    { id: 1, value: 15, label: "Series B" },
    { id: 2, value: 20, label: "Series C" },
  ];

  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: "global", highlighted: "item" },
          faded: { innerRadius: 30, additionalRadius: -30 },
        },
      ]}
      height={300}
      width={500}
      className="min-h-[300px] min-w-[500px]"
    />
  );
}
