import { Contract, Provider, Wallet } from "ethers";
import { Contracts } from "utils/constants/contracts";
import { ProposalType } from "utils/types/proposalType";

export async function createProposal(
  provider: Provider,
  privateKey: string,
  network: "Polygon" | "Local" | "Mumbai",
  proposalInfo: ProposalType
) {
  try {
    const wallet = new Wallet(privateKey, provider);
    // const walletSigner = wallet.connect(provider);
    const contract = new Contract(
      Contracts.Dao[network],
      Contracts.Dao.abi,
      wallet
    );
    const response = await contract.addVote(
      proposalInfo.name,
      proposalInfo.description,
      proposalInfo.startDate,
      proposalInfo.endDate
    );
    await response.wait();
  } catch (err) {
    console.log("");
  }
}

export async function getProposal(
  provider: Provider,
  network: "Polygon" | "Local" | "Mumbai",
  privateKey: string
) {
  try {
    const wallet = new Wallet(privateKey, provider);
    const contract = new Contract(
      Contracts.Dao[network],
      Contracts.Dao.abi,
      wallet
    );
    const response = await contract.getProposals();
    const isUserVoted = await contract.isUserVoted();
    return { success: true, data: response, IsVoted: isUserVoted };
  } catch (err) {
    console.log(err);
    return { success: false, data: err };
  }
}
// contract: { address: string; abi: InterfaceAbi }
//)
