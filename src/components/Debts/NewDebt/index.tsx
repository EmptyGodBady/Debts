import React, { PropsWithChildren, useState } from "react";
import { Users } from "../../../../constants/enums";
import DropDown from "@/components/DropDown";
import createDebt from "@/requesters/createDebt";
import { User } from "../../../../constants/interfaces";

type Props = PropsWithChildren<{
  users: User[];
}>;

export default function NewDebt({ users }: Props) {
  const [amount, setAmount] = useState<number>();
  const [debtor_id, setDebtor_id] = useState<Users>();
  const [creditor_id, setMoneylender_id] = useState<Users>();
  const [coment, setComent] = useState<string>("");

  const handleAmoutChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setAmount(value !== "" ? parseFloat(value) : undefined);
  };

  const handleComent = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setComent(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      amount === undefined ||
      debtor_id === undefined ||
      creditor_id === undefined
    )
      return;
    createDebt({ amount, debtor_id, creditor_id });
  };

  return (
    <form
      className="flex flex-col  h-[100px] w-[400px] mb-5 text-white"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <div className="flex justify-between m-1 h-7">
          <input
            onChange={handleAmoutChange}
            value={amount !== undefined ? amount : ""}
            placeholder="Value"
            type="number"
            className="w-[75px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-[#333333]  border rounded text-center"
          />
          Debtor:
          <DropDown
            fSide={(side) => setDebtor_id(side as Users)}
            users={users}
          />
          Money lender:
          <DropDown
            fSide={(side) => setMoneylender_id(side as Users)}
            users={users}
          />
        </div>
        <input
          type="text"
          placeholder="coment..."
          className="bg-[#333333] p-1 m-1 border rounded"
          onChange={handleComent}
          value={coment}
        />
      </div>
      <button type="submit" className="border rounded m-1 bg-[#333333]">
        Create
      </button>
    </form>
  );
}
