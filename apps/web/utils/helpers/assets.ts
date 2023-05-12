import { Provider, AddressLike, Contract, formatEther } from "ethers";
import { NetworkType } from "utils/constants/rpcProvider";
import etherumAbi from "utils/abis/etherum_abi.json";

export async function userAssets(
  userAddress: string,
  provider: Provider,
  network: NetworkType
) {
  const maticBalance = await provider?.getBalance(userAddress as AddressLike);
  //   const contract = new Contract(tokenContractAddress, etherumAbi, provider);
  //   const balance = (
  //     await contract.balanceOf((await provider.getSigners())[0].address)
  //   ).toString();
  let formatedMatic;
  if (maticBalance) {
    formatedMatic = formatEther(maticBalance);
  } else {
    formatedMatic = "0";
  }
  return {
    Matic: Number(formatedMatic),
    EtbCoin: 0,
    Ether: 0,
  };
}

export async function prices() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Cmatic-network&vs_currencies=usd%2Cbtc&include_24hr_change=true&precision=2"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return {
      Matic: {
        price: data["matic-network"].usd,
        change: data["matic-network"].usd_24h_change,
      },
      Ether: {
        price: data.ethereum.usd,
        change: data.ethereum.usd_24h_change,
      },
      EtbCoin: {
        price: 55,
        change: 0.0001,
      },
    };
  } catch (err) {
    console.log(err);
  }
}
