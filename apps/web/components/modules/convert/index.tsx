import { useState } from "react";
import { Divider, Form, Input, Select, Typography } from "antd";
import { GlassCard } from "components/elements/cards";
import { Curriences } from "utils/constants/currencies";

import styles from "./convert.module.scss";

const { Text, Title } = Typography;

export default function Convert({ asset }: any) {
  const [selectAsset, setSelectAsset] = useState<boolean>(false);
  const [convertAsset, setConvertAsset] = useState<string>(Curriences[0].name);

  const onChangeAsset = (_v: any, option: any) => {
    setConvertAsset(option.value);
    setSelectAsset(false);
  };

  return (
    <GlassCard>
      {asset != undefined && (
        <div className={styles.layouts}>
          <Title level={5}>{`${asset.name} Converter`}</Title>
          <Form>
            <Form.Item name="convert">
              <Input
                size="large"
                type="number"
                prefix={
                  <>
                    {asset.abbrev}
                    <Divider type="vertical" />
                  </>
                }
                min={0}
              />
            </Form.Item>
            <Form.Item name="to">
              <Select
                showSearch
                placeholder="Select an Asset"
                optionFilterProp="children"
                defaultActiveFirstOption
                onChange={onChangeAsset}
                size="large"
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={Curriences.map((value) => {
                  return {
                    value: value.name,
                    label: value.name,
                  };
                })}
              />
            </Form.Item>
          </Form>
        </div>
      )}
    </GlassCard>
  );
}
