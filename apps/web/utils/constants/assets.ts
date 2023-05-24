import { InterfaceAbi } from "ethers";
import { NetworkNames } from "utils/constants/rpcProvider";
import etherumAbi from "utils/abis/etherum_abi.json";
import usdtAbi from "utils/abis/usdt_abi.json";
import etbcAbi from "utils/abis/etbc_abi.json";

export type AssetNames = "Matic" | "Ether" | "Usdt" | "EtbCoin";
export interface AssetProps {
  name: AssetNames;
  abbrev: string;
  imageUrl?: string;
  contractAddress: Record<NetworkNames, string>;
  coingeckoId?: string;
  abi?: InterfaceAbi;
}

export const Assets: AssetProps[] = [
  {
    name: "Matic",
    abbrev: "Matic",
    imageUrl: "./icons/assets/matic.svg",
    contractAddress: {
      Local: "",
      Mumbai: "",
      Polygon: "",
    },
    coingeckoId: "matic-network",
  },
  {
    name: "Ether",
    abbrev: "ETH",
    imageUrl: "./icons/assets/eth.svg",
    contractAddress: {
      Polygon: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
      Mumbai: "0xc9572565Bf72C5fBBecf317681482dd42761eBba",
      Local: "0x47d72035D968AD6dAe6790D20FB52CE3a2ecF4f9",
    },
    coingeckoId: "ethereum",
    abi: etherumAbi,
  },
  {
    name: "EtbCoin",
    abbrev: "ETBC",
    imageUrl: "./icons/assets/etbcoin.svg",
    contractAddress: {
      Polygon: "",
      Mumbai: "0xe4B5Ca7F0c3Ba8A0d94985a5B4600F185fE0bd32",
      Local: "0xA959578C43374491F5414dcDB46f9895f258A46a",
    },
    abi: etbcAbi,
  },
  {
    name: "Usdt",
    abbrev: "USDT",
    imageUrl: "./icons/assets/usdt.svg",
    contractAddress: {
      Polygon: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
      Mumbai: "0x154dc2C2eb39835962FaF61B697cCef0A57f3f6E",
      Local: "0xce31B91f46019397572e1fCC40F1C9F0F4347D87",
    },
    coingeckoId: "tether",
    abi: usdtAbi,
  },
];
