import {
  AddressLike,
  Contract,
  InterfaceAbi,
  Provider,
  Wallet,
  parseEther,
  parseUnits,
} from "ethers";

export async function getGasPrice(provider: Provider) {
  const fee = await provider.getFeeData();

  return fee;
}

export async function sendContractToken(
  provider: Provider,
  amount: number,
  privateKey: string,
  receiverAddress: AddressLike,
  contract: { address: string; abi: InterfaceAbi }
) {
  const wallet = new Wallet(privateKey);
  const walletSigner = wallet.connect(provider);
  try {
    const assetContract = new Contract(
      contract.address,
      contract.abi,
      walletSigner
    );
    const numberOfTokens = parseUnits(amount.toString(), 18);
    const transferResult = await assetContract.transfer(
      receiverAddress,
      numberOfTokens
    );
    console.log(transferResult);
  } catch (err) {
    console.log(err);
  } finally {
  }
}

export async function sendToken(
  provider: Provider,
  amount: number,
  privateKey: string,
  senderAddress: AddressLike,
  receiverAddress: AddressLike
) {
  const wallet = new Wallet(privateKey);
  const walletSigner = wallet.connect(provider);
  const nonce = await provider.getTransactionCount(
    senderAddress as AddressLike,
    "latest"
  );
  try {
    const fee = await provider.getFeeData();
    const tx = {
      from: senderAddress,
      to: receiverAddress,
      value: parseEther(amount?.toString() ?? "0"),
      nonce: nonce,
      gasLimit: 21000, // 100000
      gasPrice: fee.gasPrice,
    };

    const transferResult = await walletSigner.sendTransaction(tx);
    console.log(transferResult);
    return { result: true, data: transferResult };
  } catch (err) {
    return { result: false, data: err };
  }
}
