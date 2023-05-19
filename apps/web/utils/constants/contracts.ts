export interface ContractsType {
  Polygon: string;
  Mumbai: string;
  Local: string;
  abi: string;
}

export const Contracts: Record<string, ContractsType> = {
  Dao: {
    abi: "",
    Polygon: "",
    Mumbai: "",
    Local: "0xf248F430BC5723bA0cC4bF0aC80e70438d1E8253",
  },
  Etbc: {
    abi: "",
    Polygon: "",
    Mumbai: "",
    Local: "",
  },
  Loan: {
    abi: "",
    Polygon: "",
    Mumbai: "",
    Local: "",
  },
};
