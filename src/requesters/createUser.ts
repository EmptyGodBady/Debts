import customFetch from ".";
import host from "../../constants/constants";
import { RootEndpoints } from "../../constants/enums";

const createUser = async (name: string) => {
  await customFetch(host + RootEndpoints.Users, {
    method: "POST",
    body: { name: name },
  });
};
export default createUser;
