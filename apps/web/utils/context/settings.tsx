"use client";
import { createContext, useContext, useEffect, useState } from "react";
import {
  getItemFromLocalStorage,
  setItemInLocalStorage,
} from "utils/helpers/localStorage";
import { SettingProps } from "utils/types/settingTypes";

interface SettingState {
  userSetting: SettingProps;
  setUserSetting(settings: SettingProps): void;
}

const defaultSettingState: SettingState = {
  userSetting: {
    currencyConversion: "ETB",
    primaryCurrency: "Matic",
    language: "d",
    hideAssets: false,
    lockerTimer: 2,
  },
  setUserSetting: () => {},
};

//ToDo
// Curriences.map((items: any, index: number) => {
//   return items.name;
// });

const SettingContext = createContext(defaultSettingState);

interface SettingProviderProps {
  children: React.ReactNode;
}

export const SettingProvider = ({
  children,
}: SettingProviderProps): JSX.Element => {
  const [userSetting, setUserSetting] = useState<SettingProps>(
    defaultSettingState.userSetting
  );

  return (
    <SettingContext.Provider value={{ userSetting, setUserSetting }}>
      {children}{" "}
    </SettingContext.Provider>
  );
};

export const useSetting = () => useContext(SettingContext);
