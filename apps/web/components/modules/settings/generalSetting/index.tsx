import { useEffect } from "react";
import { Radio, RadioChangeEvent, Select, Switch, Typography } from "antd";
import Button from "components/elements/buttons";
import { Curriences } from "utils/constants/currencies";
import { useSetting } from "utils/context/settings";
import { SettingProps } from "utils/types/settingTypes";

import styles from "./generalSetting.module.scss";
import {
  getItemFromLocalStorage,
  setItemInLocalStorage,
} from "utils/helpers/localStorage";

const { Text, Title } = Typography;

export function GeneralSetting() {
  const { userSetting, setUserSetting } = useSetting();

  const primaryCurrencyOptions = ["Matic", "Fiat"];

  const hideAssetChange = () => {
    const settings: SettingProps = {
      hideAssets: !userSetting.hideAssets,
    };
    setUserSetting({ ...userSetting, ...settings });
  };

  const onChangeCurrencyConversion = (_v: any, option: any) => {
    const settings: SettingProps = {
      currencyConversion: option.value,
    };
    setUserSetting({ ...userSetting, ...settings });
  };

  const onChangePrimaryCurrency = ({ target: { value } }: RadioChangeEvent) => {
    const settings: SettingProps = {
      primaryCurrency: value,
    };
    setUserSetting({ ...userSetting, ...settings });
  };

  const saveSetting = () => {
    setItemInLocalStorage("settings", userSetting, true);
  };

  useEffect(() => {
    const settings = getItemFromLocalStorage("settings", true);
    setUserSetting(settings);
  }, []);

  return (
    <div>
      <div className={styles.options}>
        <Title level={5}>Currency conversion</Title>
        <Select
          className={styles.currencies}
          showSearch
          placeholder="Select currencys"
          optionFilterProp="children"
          defaultActiveFirstOption
          value={userSetting.currencyConversion}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={Curriences.map((value) => {
            return {
              value: value.name,
              label: value.name,
            };
          })}
          onChange={onChangeCurrencyConversion}
        />
      </div>
      <div className={styles.options}>
        <Title level={5}>Primary currency</Title>
        <Text type="secondary">
          Select native to prioritize displaying values in the native currency
          of the chain (e.g. ETH). Select Fiat to prioritize displaying values
          in your selected fiat currency.
        </Text>
        <Radio.Group
          defaultValue={userSetting.primaryCurrency}
          options={primaryCurrencyOptions}
          onChange={onChangePrimaryCurrency}
          value={userSetting.primaryCurrency}
          optionType="button"
        />
      </div>
      <div className={styles.options}>
        {" "}
        <Title level={5}>Language</Title>
      </div>

      <div className={styles.options}>
        <Title level={5}>Hide assets without balance</Title>
        <span>
          <Switch
            defaultChecked={userSetting.hideAssets}
            onChange={hideAssetChange}
          />
          <Text className={styles.hideAssetsLabel} strong>
            {userSetting.hideAssets ? "Hide" : "Show"}
          </Text>
        </span>
      </div>
      <div className={styles.options}>
        <Button
          className={styles.button}
          text="Confirm Change"
          type="primary"
          onClick={saveSetting}
        />
      </div>
    </div>
  );
}
