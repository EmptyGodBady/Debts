import DebtsChart from "@/components/chart";
import NewDebt from "@/components/NewDebt";
import { useState } from "react";

export default function Home() {
  const [debts, setDebts] = useState<string[]>([]);
  const [currentDebts, setCurrentDebts] = useState({});

  const handleNewDebt = (debt: string) => {
    setDebts((prevDebts) => [...prevDebts, debt]);
  };

  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const sendTestData = async () => {
    const testData = {
      exponent: true,
      amount: 123,
      debtor: "string",
      moneylender: "string",
      coment: "string",
    };

    try {
      const response = await fetch("http://localhost:8080/debt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(testData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setResponseMessage(`Success: ${JSON.stringify(result)}`);
    } catch (error: any) {
      setResponseMessage(`Error: ${error.message}`);
    }
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
      <div>
        <button onClick={sendTestData}>Send Test Data</button>
        {responseMessage && <p>{responseMessage}</p>}
      </div>
    </div>
  );
}
