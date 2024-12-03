import customFetch from ".";
import host from "../../constants/constants";
import { RootEndpoints } from "../../constants/enums";
import { Message } from "../../constants/interfaces";

const createMessage = async ({ description, sender_id, debt_id }: Message) => {
  await customFetch(host + RootEndpoints.Messages, {
    method: "POST",
    body: {
      description: description,
      sender_id: sender_id,
      debt_id: debt_id,
    },
  });
};
export default createMessage;
