import customFetch from ".";
import host from "../../constants/constants";
import { RootEndpoints } from "../../constants/enums";

const requestUsers = async () => {
  const response = await customFetch(host + RootEndpoints.Users, {
    method: "GET",
  });
  return response;
};
export default requestUsers;
