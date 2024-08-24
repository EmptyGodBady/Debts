import React, { FormEvent, PropsWithChildren, useState } from "react";
import { EUsers } from "../../../constants/enums";
type Props = PropsWithChildren<{
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}>;

export default function NewDebt({ handleSubmit }: Props) {
  const [exponent, setExponent] = useState(true);
  const [amount, setAmount] = useState<number>();
  const [debtor, setDebtor] = useState<EUsers>();
  const [moneylender, setMoneylender] = useState<EUsers>();
  const handleDebtorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDebtor(event.target.value as EUsers);
  };
  const handleMoneylenderChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setMoneylender(event.target.value as EUsers);
  };
  const handleAmoutChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setAmount(value !== "" ? parseFloat(value) : undefined);
  };
  return (
    <form
      className="flex flex-col  h-[100px] w-[300px]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <div className="flex justify-between m-1">
          {exponent && (
            <div
              className="border rounded w-8 text-center cursor-pointer select-none flex items-center justify-center"
              onClick={() => {
                setExponent(false);
              }}
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
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          )}
          {!exponent && (
            <div
              className="border rounded w-8 text-center cursor-pointer select-none"
              onClick={() => {
                setExponent(true);
              }}
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
                  stroke="#000000"
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
            type="number"
            className="w-[75px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-[#19547b] border rounded text-center"
          />
          <select
            className="pl-1 bg-[#19547b] rounded border appearance-none w-20 text-center"
            onChange={handleDebtorChange}
            value={debtor}
          >
            <option value="Micha">Micha</option>
            <option value="Vitek">Vitek</option>
            <option value="Sania">Sania</option>
          </select>
          <select
            className="pl-1 bg-[#19547b] rounded border appearance-none w-20 text-center"
            onChange={handleMoneylenderChange}
            value={moneylender}
          >
            <option value="Micha">Micha</option>
            <option value="Vitek">Vitek</option>
            <option value="Sania">Sania</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="coment..."
          className="bg-[#19547b] p-1 m-1 border rounded"
        />
      </div>
      <button type="submit" className="border rounded m-1">
        Change
      </button>
    </form>
  );
}
