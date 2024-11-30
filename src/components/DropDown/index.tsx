import { PropsWithChildren, useState } from "react";
import { User } from "../../../constants/interfaces";

type Props = PropsWithChildren<{
  fSide: (side: string) => void;
  users: User[];
}>;

const DropDown = ({ users, fSide }: Props) => {
  const [selectedName, setSelectedName] = useState<string>("");

  const usersNames = users.map(({ name }) => name);

  const getIdByName = (name: string): string | undefined => {
    const user = users.find((user) => user.name === name);
    return user ? user.id : undefined;
  };
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelectedName(newValue);
    const userId = getIdByName(newValue);
    if (userId) {
      fSide(userId);
    }
  };

  return (
    <div className="pl-1 bg-[#333333] rounded border w-16 text-center">
      <select
        id="name-select"
        value={selectedName}
        onChange={handleChange}
        className="appearance-none bg-[#333333] text-white "
      >
        <option value="" disabled></option>
        {usersNames.map((name, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
