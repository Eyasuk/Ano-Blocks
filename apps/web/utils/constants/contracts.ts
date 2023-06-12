import DaoAbi from "utils/abis/dao_abi.json";
import ChapaTracker from "utils/abis/chapatracker_abi.json";
import EtbcAbi from "utils/abis/etbc_abi.json";
import EtherAbi from "utils/abis/etherum_abi.json";
import LoanAbi from "utils/abis/loan_abi.json";

export interface ContractsType {
  Polygon: {
    address: string;
    owner?: string;
  };
  Mumbai: {
    address: string;
    owner?: string;
  };
  Local: {
    address: string;
    owner?: string;
  };
  abi: any;
}

export const Contracts: Record<string, ContractsType> = {
  Dao: {
    abi: DaoAbi,
    Polygon: { address: "" },
    Mumbai: { address: "0xF296936f570b82777A8eA529DdaabB233f510Df1" },
    Local: { address: "0xA6adEE61DA075cD90Fd8c27Af71A9058218ea011" },
  },
  Etbc: {
    abi: EtbcAbi,
    Polygon: { address: "" },
    Mumbai: { address: "0xF362E4f95A191E891F19A493173d7e5E950953D9" },
    Local: { address: "0xf98D58b1E2D0B5869e773fCa4d6cEEADd4B63ad3" },
  },
  Loan: {
    abi: LoanAbi,
    Polygon: { address: "" },
    Mumbai: {
      address: "0x8F884EC930A98712d88C34332750aB0E2B6Fb383",
      owner: "0x64Fc8D6dCA4A3C65432cC1E6d12779a761381b4a",
    },
    Local: { address: "" },
  },
  ChapaTracker: {
    abi: ChapaTracker,
    Polygon: { address: "" },
    Mumbai: {
      address: "0x5821133e3005C6103de35c2886FC55fDac5ea846",
      owner: "0x64Fc8D6dCA4A3C65432cC1E6d12779a761381b4a",
    },
    Local: {
      address: "0x9f841700C110eDB4A2FDe4c7c8A50BdaC12146D4",
      owner: "0x347FB5f57c9763a263d46c78313600E780f195e7",
    },
  },
  Ether: {
    abi: EtherAbi,
    Polygon: { address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619" },
    Mumbai: {
      address: "0xc9572565Bf72C5fBBecf317681482dd42761eBba",
      owner: "0x64Fc8D6dCA4A3C65432cC1E6d12779a761381b4a",
    },
    Local: {
      address: "0x47d72035D968AD6dAe6790D20FB52CE3a2ecF4f9",
      owner: "0x347FB5f57c9763a263d46c78313600E780f195e7",
    },
  },
};
