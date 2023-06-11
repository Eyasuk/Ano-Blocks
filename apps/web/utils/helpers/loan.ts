import { Contract, InterfaceAbi, Provider } from "ethers";
import { Contracts } from "utils/constants/contracts";

export async function getCreditScore(
  provider: Provider,
  network: "Polygon" | "Local" | "Mumbai"
) {
  const contract = new Contract(
    Contracts.Loan[network].address,
    Contracts.Loan.abi as InterfaceAbi,
    provider
  );

  const credit = await contract.calculateCredit();
  console.log(credit);
  return credit;
}

export async function getCreditLimit(
  provider: Provider,
  network: "Polygon" | "Local" | "Mumbai"
) {
  const contract = new Contract(
    Contracts.Loan[network].address,
    Contracts.Loan.abi as InterfaceAbi,
    provider
  );

  const credit = await contract.calculateCreditLimit();
  console.log(credit);
  return credit;
}

export async function currentUserLoan(
  provider: Provider,
  network: "Polygon" | "Local" | "Mumbai"
) {
  const contract = new Contract(
    Contracts.Loan[network].address,
    Contracts.Loan.abi as InterfaceAbi,
    provider
  );

  const balance = await contract.currentUserLoan();
  console.log();
  return balance;
}
