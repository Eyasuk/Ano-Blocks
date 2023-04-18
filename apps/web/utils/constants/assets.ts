interface AssetProps {
  name: string;
  abbrev: string;
  imageUrl?: string;
}

export const Assets: AssetProps[] = [
  {
    name: "Matic",
    abbrev: "Matic",
    imageUrl: "./icons/assets/matic.svg",
  },
  { name: "Ether", abbrev: "ETH", imageUrl: "./icons/assets/eth.svg" },
  {
    name: "EtbCoin",
    abbrev: "ETBC",
    imageUrl: "./icons/assets/etbcoin.svg",
  },
];
