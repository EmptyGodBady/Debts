import DebtsChart from "@/components/chart";
import NewDebt from "@/components/Debts/NewDebt";
import UpdateDebt from "@/components/Debts/UpdateDebt";
import CreateUser from "@/components/Users/createUser.ts";
import requestUsers from "@/requesters/requestUsers";
import { useEffect, useState } from "react";
import Switch from "react-switch";

export default function Home() {
  const [debts, setDebts] = useState<string[]>([]);
  const [debtMode, setDebtMode] = useState(true);
  const handleNewDebt = (debt: string) => {
    setDebts((prevDebts) => [...prevDebts, debt]);
  };
  const m = async () => {
    const users = await requestUsers();
    console.log(users);
  };

  return (
    <div className="bg-[#333333] h-screen w-screen flex items-center justify-evenly p-1">
      <div className="flex flex-col items-center">
        <Switch
          uncheckedIcon={false}
          className="mb-10"
          checkedIcon={false}
          onColor={"#888"}
          checked={debtMode}
          onChange={() => {
            if (debtMode === true) {
              setDebtMode(false);
            } else {
              setDebtMode(true);
            }
          }}
        />
        {debtMode && <NewDebt newDebt={handleNewDebt} />}
        {!debtMode && <UpdateDebt newDebt={handleNewDebt} />}
      </div>
      {/* <DebtsChart /> */}
      <CreateUser />
      <ul>
        {debts.map((debt, index: number) => (
          <li key={index}>{debt}</li>
        ))}
      </ul>
    </div>
  );
}
