export interface CurrencyProps {
  name: string;
  country: string;
  imageUrl?: string;
}

export const Curriences: CurrencyProps[] = [
  {
    name: "Etb",
    country: "Ethiopia",
  },
  {
    name: "Usd",
    country: "USA",
  },
];
