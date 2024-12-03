export interface Debt {
  id?: string;
  amount: number;
  debtor_id: string;
  creditor_id: string;
  messages?: Message;
}
export interface Message {
  id?: string;
  description: string;
  sender_id?: string;
  debt_id: string;
}
export type User = {
  id: string;
  name: string;
};
