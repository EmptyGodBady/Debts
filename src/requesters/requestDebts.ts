import customFetch from ".";
import host from "../../constants/constants";
import { RootEndpoints } from "../../constants/enums";

const requestDebts = async () => {
  const response = await customFetch(host + RootEndpoints.Debts, {
    method: "GET",
  });
  return response;
};
export default requestDebts;
