export interface IDebt {
  id?: string;
  amount: number;
  debtor_id: string;
  creditor_id: string;
  messages?: IMessage;
}
export interface IMessage {
  id?: string;
  description: string;
  sender_id?: string;
  debt_id: string;
}
export type User = {
  id: string;
  name: string;
};
