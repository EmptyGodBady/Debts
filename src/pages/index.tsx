import DebtsChart from "@/components/chart";
import NewDebt from "@/components/NewDebt";
import { useState } from "react";

export default function Home() {
  const [debtsValue, setDebtsValue] = useState<string>("");
  const [debts, setDebts] = useState<string[]>([]);
  const addDebt = () => {
    if (debtsValue.trim() !== "") {
      setDebts([...debts, debtsValue]);
      setDebtsValue("");
    }
  };
  return (
    <main className="bg-[#19547b] h-screen w-screen flex flex-wrap">
      <NewDebt handleSubmit={} />
      <DebtsChart />
      <ul>
        {debts.map((debt, index: number) => (
          <li key={index}>{debt}</li>
        ))}
      </ul>
    </main>
  );
}
