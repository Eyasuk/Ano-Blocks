import { Contract, Provider, Wallet } from "ethers";
import { Contracts } from "utils/constants/contracts";
export async function createProposal(
  provider: Provider,
  privateKey: string,
  network: "Polygon" | "Local" | "Mumbai",
  name: string,
  description: string,
  date: Date[]
) {
  const wallet = new Wallet(privateKey);
  const walletSigner = wallet.connect(provider);
  try {
    const contract = new Contract(
      Contracts.Dao[network],
      Contracts.Dao.abi,
      walletSigner
    );
    //contract.getFunction();
  } catch (err) {
    console.log("");
  }
}

// contract: { address: string; abi: InterfaceAbi }
//)
