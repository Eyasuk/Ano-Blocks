import { useEffect, useState } from "react";
import { Divider, Form, Input, InputNumber, Select, Typography } from "antd";
import { GlassCard } from "components/elements/cards";
import { AssetProps, Assets } from "utils/constants/assets";

import styles from "./convert.module.scss";
import Button from "components/elements/buttons";

const { Text, Title } = Typography;

export default function Convert({ params }: { params: { slug: string } }) {
  const [asset, setAsset] = useState<AssetProps>();
  const [selectAsset, setSelectAsset] = useState<boolean>(false);
  const [swapFromAsset, setSwapFromAsset] = useState<string>(Assets[0].name);

  useEffect(() => {
    Assets.forEach((item) => {
      if (item.name.toLocaleLowerCase() == params.slug.toLocaleLowerCase()) {
        setAsset(item);
      }
    });
  }, []);

  const onChangeAsset = (_v: any, option: any) => {
    setSwapFromAsset(option.value);
    setSelectAsset(false);
  };

  const onAssetSelect = () => {
    setSelectAsset(true);
  };

  return (
    <GlassCard>
      {asset != undefined && (
        <div className={styles.layouts}>
          <Title level={4}>{`${asset.name} Converter`}</Title>
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
                options={Assets.map((value) => {
                  return {
                    icon: value.imageUrl,
                    value: value.name,
                    label: value.abbrev,
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
