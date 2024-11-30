import NewDebt from "@/components/Debts/NewDebt";
import UpdateDebt from "@/components/Debts/UpdateDebt";
import CreateUser from "@/components/Users/createUser.ts";
import requestUsers from "@/requesters/requestUsers";
import { useEffect, useState } from "react";
import Switch from "react-switch";
import { User } from "../../constants/interfaces";

export default function Home() {
  const [debtMode, setDebtMode] = useState(true);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const usersData = await requestUsers();
      setUsers(usersData);
    };

    getUsers();
  }, []);

  return (
    <div className="bg-[#333333] h-screen w-screen flex items-center justify-evenly p-1">
      <div className="flex flex-col items-center">
        <div className="mb-10 flex justify-evenly w-[300px] text-white">
          {debtMode && <p>Create</p>}
          {!debtMode && <p className="font-bold">Create</p>}
          <Switch
            uncheckedIcon={false}
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
          {debtMode && <p className="font-bold">Update</p>}
          {!debtMode && <p>Update</p>}
        </div>
        {!debtMode && <NewDebt users={users} />}
        {/* {debtMode && <UpdateDebt users={users} />} */}
      </div>
      <CreateUser />
      {/* <ul>
        {debts.map((debt, index: number) => (
          <li key={index}>{debt}</li>
        ))}
      </ul> */}
    </div>
  );
}
