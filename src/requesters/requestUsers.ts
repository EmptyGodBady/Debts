import customFetch from ".";
import { RootEndpoints } from "../../constants/enums";

const requestUsers = async () => {
  const response = await customFetch(
    "http://localhost:8080" + RootEndpoints.Users + "/user",
    {
      method: "GET",
    }
  );
  return response;
};
export default requestUsers;
