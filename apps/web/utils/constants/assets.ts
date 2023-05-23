export interface AssetProps {
  name: string;
  abbrev: string;
  imageUrl?: string;
  contractAddress?: {};
  coingeckoId?: string;
}

export const Assets: AssetProps[] = [
  {
    name: "Matic",
    abbrev: "Matic",
    imageUrl: "./icons/assets/matic.svg",
    contractAddress: {
      Local: "",
    },
    coingeckoId: "matic-network",
  },
  {
    name: "Ether",
    abbrev: "ETH",
    imageUrl: "./icons/assets/eth.svg",
    contractAddress: {
      Polygon: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
      Mumbai: "0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa",
      Local: "",
    },
    coingeckoId: "ethereum",
  },
  {
    name: "EtbCoin",
    abbrev: "ETBC",
    imageUrl: "./icons/assets/etbcoin.svg",
    contractAddress: {
      Polygon: "",
      Mumbai: "",
      Local: "",
    },
  },
  {
    name: "Usdt",
    abbrev: "USDT",
    imageUrl: "./icons/assets/usdt.svg",
    contractAddress: {
      Polygon: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
      Mumbai: "",
      Local: "",
    },
    coingeckoId: "tether",
  },
];
