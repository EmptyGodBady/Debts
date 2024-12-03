import { PropsWithChildren } from "react";
import DebtCard from "../DebtCard";
import { Debt, User } from "../../../../constants/interfaces";

type Props = PropsWithChildren<{
  debts: Debt[];
  users: User[];
}>;

export default function DebtsList({ debts, users }: Props) {
  return (
    <div className="flex  w-[1400px]">
      {debts.map((debt: Debt) => (
        <DebtCard key={debt.id} debt={debt} users={users} />
      ))}
    </div>
  );
}
