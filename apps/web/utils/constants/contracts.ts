import DaoAbi from "utils/abis/dao_abi.json";

export interface ContractsType {
  Polygon: string;
  Mumbai: string;
  Local: string;
  abi: any;
}

export const Contracts: Record<string, ContractsType> = {
  Dao: {
    abi: DaoAbi,
    Polygon: "",
    Mumbai: "0x545de3a67C64CC0Ba2704a89A59EE3D0f4a26722",
    Local: "0x86D59f415658Ad5bbF42EF039C088a7Ff0D616Ca",
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
