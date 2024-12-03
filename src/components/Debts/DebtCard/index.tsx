import React, { PropsWithChildren } from "react";
import { Debt, User } from "../../../../constants/interfaces";
import Link from "next/link";
type Props = PropsWithChildren<{
  debt: Debt;
  users: User[];
}>;
export default function DebtCard({ debt, users }: Props) {
  const debtor =
    users.find((user) => user.id === debt.debtor_id)?.name || "Unknown";
  const creditor =
    users.find((user) => user.id === debt.creditor_id)?.name || "Unknown";

  const goToUpdatePage = () => {
    if (debt.id) {
      localStorage.setItem("debt_id", debt.id);
    }
  };
  return (
    <div className="w-[400px] border rounded flex flex-col items-center text-white m-3">
      <div className="flex justify-between">
        <div className="border rounded w-[100px] h-7 text-center m-2">
          {debtor}
        </div>
        <p className="  h-7 text-center m-2">owe</p>
        <div className="border rounded w-[100px] h-7 text-center m-2">
          {creditor}
        </div>
        <div className="border rounded w-[100px] h-7 text-center m-2">
          {debt.amount}
        </div>
      </div>
      <div className="flex items-center ">
        <div className="border rounded w-[300px] h-7 text-center m-2 ">
          comments
        </div>
        <Link href={"/updateDebtPage"}>
          <button
            className="h-7 w-[60px] border rounded m-2"
            onClick={goToUpdatePage}
          >
            Update
          </button>
        </Link>
      </div>
    </div>
  );
}
