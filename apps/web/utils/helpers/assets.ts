import { Provider, AddressLike, Contract, formatEther } from "ethers";
import { NetworkType } from "utils/constants/rpcProvider";
import moment from "moment";
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
        price: 1,
        change: 0.01,
      },
    };
  } catch (err) {
    console.log(err);
  }
}

export async function assetPriceInfo(day: number, assetId: string) {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${assetId}/market_chart?vs_currency=usd&days=7`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    let price: number[] = [];
    let date: string[] = [];
    data.prices.forEach((item: [number, number]) => {
      price.push(item[1]);
      date.push(moment.unix(item[0] / 1000).format("dd-MM"));
    });

    return {
      dates: date,
      prices: price,
    };
  } catch (err) {
    console.log(err);
  }
}

export async function assetInfo(assetId: string) {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${assetId}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const dataResponse = await response.json();
    const data = dataResponse[0];
    return {
      price: data["current_price"],
      marketCap: data["market_cap"],
      volume: data["total_volume"],
      high24: data["high_24h"],
      low24: data["low_24h"],
      vc: data["total_volume"] / data["market_cap"],
      ath: data["ath"],
      athPercent: data["ath_change_percentage"],
      athDate: data["ath_date"],
      atl: data["atl"],
      atlPercent: data["atl_change_percentage"],
      atlDate: data["atl_date"],
    };
  } catch (err) {
    console.log(err);
  }
}
