import customFetch from ".";
import { RootEndpoints } from "../../constants/enums";

const createUser = async (name: string) => {
  await customFetch("http://localhost:8080" + RootEndpoints.Users + "/user", {
    method: "POST",
    body: { name: name },
  });
};
export default createUser;
