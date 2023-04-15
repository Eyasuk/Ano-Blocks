export interface NetworkType {
  name: string;
  rpcLink: string;
  currency: string;
  type?: "Main" | "Test" | "Custom";
}

export const Networks: Record<string, NetworkType> = {
  Polygon: {
    name: "Polygon",
    rpcLink:
      "https://rpc.ankr.com/polygon/7e1b505b2f6a817e58d34ec9daa603aff5f27252d76b641239ed744be6b7bfa7",
    currency: "Matic",
    type: "Main",
  },
  Mumbai: {
    name: "Mumbai",
    rpcLink:
      "https://rpc.ankr.com/polygon_mumbai/7e1b505b2f6a817e58d34ec9daa603aff5f27252d76b641239ed744be6b7bfa7",
    currency: "Matic",
    type: "Test",
  },
};
