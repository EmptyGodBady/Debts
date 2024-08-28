import DebtsChart from "@/components/chart";
import NewDebt from "@/components/NewDebt";
import { useState } from "react";

export default function Home() {
  const [debts, setDebts] = useState<string[]>([]);
  const [currentDebts, setCurrentDebts] = useState({});

  const handleNewDebt = (debt: string) => {
    setDebts((prevDebts) => [...prevDebts, debt]);
  };

  return (
    <div className="bg-[#19547b] h-screen w-screen flex flex-wrap">
      <NewDebt newDebt={handleNewDebt} />
      <DebtsChart />
      <ul>
        {debts.map((debt, index: number) => (
          <li key={index}>{debt}</li>
        ))}
      </ul>
    </div>
  );
}
