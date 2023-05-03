import { useState } from "react";
import { Radio, RadioChangeEvent, Select, Switch, Typography } from "antd";
import Button from "components/elements/buttons";
import { Curriences } from "utils/constants/currencies";
import { useNetwork } from "utils/context/network";

import styles from "./generalSetting.module.scss";

const { Text, Title } = Typography;

export function GeneralSetting() {
  const [hideAssets, setHideAssets] = useState<boolean>(false);
  const [primaryCurrency, setPrimaryCurrency] = useState();
  const { choosenNetwork } = useNetwork();

  const primaryCurrencyOptions = [choosenNetwork.currency, "Etb"];

  const hideAssetChange = () => {
    setHideAssets((prev) => !prev);
  };

  const onChangePrimaryCurrency = ({ target: { value } }: RadioChangeEvent) => {
    setPrimaryCurrency(value);
  };

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
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={Curriences.map((value) => {
            return {
              value: value.name,
              label: value.name,
            };
          })}
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
          options={primaryCurrencyOptions}
          onChange={onChangePrimaryCurrency}
          value={primaryCurrency}
          optionType="button"
        />
      </div>
      <div className={styles.options}>
        {" "}
        <Title level={5}>Language</Title>
      </div>
      <div className={styles.options}>
        <Title level={5}>Theme</Title>
        <Select
          className={styles.currencies}
          placeholder="Select theme"
          defaultActiveFirstOption
          options={["Dark", "Light"].map((value) => {
            return {
              value: value,
              label: value,
            };
          })}
        />
      </div>
      <div className={styles.options}>
        <Title level={5}>Hide assets without balance</Title>
        <span>
          <Switch defaultChecked={hideAssets} onChange={hideAssetChange} />
          <Text className={styles.hideAssetsLabel} strong>
            {hideAssets ? "Hide" : "Show"}
          </Text>
        </span>
      </div>
      <div className={styles.options}>
        <Button text="Confirm Change" type="primary" />
      </div>
    </div>
  );
}
