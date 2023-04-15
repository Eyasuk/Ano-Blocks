"use client";
import { createContext, useContext, useState } from "react";
import { Networks, NetworkType } from "utils/constants/rpcProvider";

interface NetworkState {
  choosenNetwork: NetworkType;
  networks: Record<string, NetworkType>;
  setChoosenNetwork(network: NetworkType): void;
  addNetwork(newNetwork: NetworkType, networkKey: string): void;
}

const defaultNetworkState: NetworkState = {
  choosenNetwork: Networks.Polygon,
  networks: Networks,
  setChoosenNetwork: () => {},
  addNetwork: (newNetwork: NetworkType, networkKey: string) => {},
};

const NetworkContext = createContext(defaultNetworkState);

interface NetworkProviderProps {
  children: React.ReactNode;
}

export const NetworkProvider = ({
  children,
}: NetworkProviderProps): JSX.Element => {
  const [choosenNetwork, setChoosenNetwork] = useState<NetworkType>(
    Networks.Polygon
  );
  const [networks, setNetworks] =
    useState<Record<string, NetworkType>>(Networks);

  const addNetwork = (newNetwork: NetworkType, networkKey: string) => {
    setNetworks({ ...networks, [networkKey]: newNetwork });
  };

  return (
    <NetworkContext.Provider
      value={{
        networks,
        choosenNetwork,
        setChoosenNetwork,
        addNetwork,
      }}
    >
      {children}{" "}
    </NetworkContext.Provider>
  );
};

export const useNetwork = () => useContext(NetworkContext);
