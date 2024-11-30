import React, { PropsWithChildren, useState } from "react";
import { Users } from "../../../../constants/enums";
import requestUsers from "@/requesters/requestUsers";
import DropDown from "@/components/DropDown";

type Props = PropsWithChildren<{
  users: string[];
}>;

export default function UpdateDebt({ users }: Props) {
  const [exponent, setExponent] = useState(true);
  const [amount, setAmount] = useState<number>();
  const [debtor, setDebtor] = useState<Users>();
  const [moneylender, setMoneylender] = useState<Users>();
  const [coment, setComent] = useState<string>("");

  // const handleDebtorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setDebtor(event.target.value as Users);
  // };

  // const handleMoneylenderChange = (
  //   event: React.ChangeEvent<HTMLSelectElement>
  // ) => {
  //   setMoneylender(event.target.value as Users);
  // };

  // const handleAmoutChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = event.target.value;
  //   setAmount(value !== "" ? parseFloat(value) : undefined);
  // };

  // const handleComent = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = event.target.value;
  //   setComent(value);
  // };

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   // event.preventDefault();
  //   // const debt = `${debtor} owes ${moneylender} ${amount} with comment: ${coment}`;
  //   // newDebt(debt);
  // };

  return (
    <form
      className="flex flex-col  h-[100px] w-[400px] mb-5  text-white"
      // onSubmit={handleSubmit}
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
            // onChange={handleAmoutChange}
            value={amount !== undefined ? amount : ""}
            placeholder="Value"
            type="number"
            className="w-[75px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-[#333333]  border rounded text-center"
          />
          Debtor:
          <DropDown
            personSide="Debtor"
            names={users}
            FSide={(side) => setDebtor(side as Users)}
          />
          Money ender:
          <DropDown
            personSide="Moneylender"
            names={users}
            FSide={(side) => setMoneylender(side as Users)}
          />
        </div>
        <input
          type="text"
          placeholder="coment..."
          className="bg-[#333333] p-1 m-1 border rounded"
          // onChange={handleComent}
          value={coment}
        />
      </div>
      <button
        type="submit"
        className="border rounded m-1 bg-[#333333]"
        onClick={() => {}}
      >
        Create
      </button>
    </form>
  );
}
