import customFetch from ".";
import host from "../../constants/constants";
import { RootEndpoints } from "../../constants/enums";
import { IDebt } from "../../constants/interfaces";

const createDebt = async ({ amount, debtor_id, creditor_id }: IDebt) => {
  await customFetch(host + RootEndpoints.Debts, {
    method: "POST",
    body: {
      amount: amount,
      debtor_id: debtor_id,
      creditor_id: creditor_id,
    },
  });
};
export default createDebt;
