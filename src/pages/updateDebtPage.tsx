import UpdateDebt from "@/components/Debts/UpdateDebt";
import React, { useEffect, useState } from "react";
import { Debt, User } from "../../constants/interfaces";
import requestUsers from "@/requesters/requestUsers";
import requestDebts from "@/requesters/requestDebts";

export default function updateDebtPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [debts, setDebts] = useState<Debt[]>([]);
  const [selectedDebt, setSelectedDebt] = useState<Debt>();

  useEffect(() => {
    const getUsers = async () => {
      const usersData = await requestUsers();
      const debtsData = await requestDebts();
      const debtId = localStorage.getItem("debt_id");
      const foundDebt = debtsData.find((debt: Debt) => debt.id === debtId);
      setSelectedDebt(foundDebt);
      setUsers(usersData);
      setDebts(debtsData);
    };

    getUsers();
  }, []);
  return (
    <div className="bg-[#333333] h-screen w-screen flex flex-col items-center justify-evenly p-1">
      <div className="flex justify-evenly flex-wrap w-[1100px]"></div>
      <div className="flex items-center justify-evenly">
        <div className="flex flex-col items-center">
          {selectedDebt && <UpdateDebt users={users} debt={selectedDebt} />}
        </div>
        {/* <CreateUser /> */}
      </div>
    </div>
  );
}
