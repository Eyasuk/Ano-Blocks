import { setItemInLocalStorage } from "utils/helpers/localStorage";
import { getItemFromLocalStorage } from "./localStorage";

export type SendHistoryProps = {
  recieverAddress: string;
  transactionHash: string;
  network: string;
  amount: number;
  asset: string;
  date: string;
};

export function saveSendHistory(sendHistory: SendHistoryProps) {
  const previous = getItemFromLocalStorage("send", true);
  if (Object.keys(previous).length != 0) {
    setItemInLocalStorage("send", [...previous, sendHistory], true);
  } else setItemInLocalStorage("send", [sendHistory], true);
}

export function getSendHistory() {
  const history = getItemFromLocalStorage("send", true);
  if (Array.isArray(history)) return history;
  else return [];
}
