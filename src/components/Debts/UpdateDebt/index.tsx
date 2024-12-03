import React, { PropsWithChildren, useState } from "react";
import { Users } from "../../../../constants/enums";
import { Debt, User } from "../../../../constants/interfaces";
import Link from "next/link";

type Props = PropsWithChildren<{
  users: User[];
  debt: Debt;
}>;

export default function UpdateDebt({ users, debt }: Props) {
  const [exponent, setExponent] = useState(true);
  const [amount, setAmount] = useState<number>();
  const [debtor_id, setDebtor_id] = useState<Users>();
  const [creditor_id, setMoneylender_id] = useState<Users>();
  const [coment, setComent] = useState<string>("");

  const debtor =
    users.find((user) => user.id === debt.debtor_id)?.name || "Unknown";
  const creditor =
    users.find((user) => user.id === debt.creditor_id)?.name || "Unknown";

  const handleAmoutChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setAmount(value !== "" ? parseFloat(value) : undefined);
  };

  const handleComent = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setComent(value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      amount === undefined ||
      debtor_id === undefined ||
      creditor_id === undefined
    )
      return;
    // updateDebt({  });
  };

  return (
    <form
      className="flex flex-col  h-[100px] w-[400px] mb-5  text-white"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <div className="flex justify-between m-1">
          {exponent && (
            <div
              className="border rounded w-8 text-center cursor-pointer select-none flex items-center justify-center bg-[#333333]"
              onClick={() => setExponent(false)}
            >
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12H20M12 4V20"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          )}
          {!exponent && (
            <div
              className="border rounded w-8 text-center cursor-pointer select-none bg-[#333333]"
              onClick={() => setExponent(true)}
            >
              <svg
                width="20px"
                height="20px"
                viewBox="-6 -2 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L18 12"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          )}
          <input
            onChange={handleAmoutChange}
            value={amount !== undefined ? amount : ""}
            placeholder="Value"
            type="number"
            className="w-[75px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-[#333333]  border rounded text-center"
          />
          <p className="border rounded pr-1 pl-1">{debtor}</p>
          <p>owe</p>
          <p className="border rounded pr-1 pl-1">{creditor}</p>
        </div>
        <input
          type="text"
          placeholder="coment..."
          className="bg-[#333333] p-1 m-1 border rounded"
          onChange={handleComent}
          value={coment}
        />
      </div>
      <Link href={"/"}>
        <button
          type="submit"
          className="border rounded m-1 bg-[#333333] w-[392px]"
        >
          Create
        </button>
      </Link>
    </form>
  );
}
