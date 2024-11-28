import createUser from "@/requesters/createUser";
import React, { useState } from "react";

export default function CreateUser() {
  const [userName, setUserName] = useState<string>("");
  const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setUserName(value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createUser(userName);
  };
  return (
    <form
      className="flex flex-col  h-[100px] w-[400px] mb-5 text-white mt-[87px]"
      onSubmit={handleSubmit}
    >
      <p className="text-center">Create User</p>
      <input
        type="text"
        placeholder="Name"
        className="bg-[#333333] p-1 m-1 border rounded"
        onChange={handleUserName}
      />
      <button type="submit" className="border rounded m-1 bg-[#333333]">
        Create
      </button>
    </form>
  );
}
