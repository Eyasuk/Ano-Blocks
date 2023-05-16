"use client";
import { useState } from "react";
import Image from "next/image";
import { ethers } from "ethers";
import {
  Form,
  Input,
  InputNumber,
  Select,
  Space,
  Spin,
  Typography,
} from "antd";
import {
  CheckCircleTwoTone,
  LoadingOutlined,
  WarningTwoTone,
} from "@ant-design/icons";
import { GlassCard } from "components/elements/cards";
import Button from "components/elements/buttons";
import { useUser } from "utils/context/user";
import { Assets } from "utils/constants/assets";

import styles from "./send.module.scss";

const { Title } = Typography;
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function Send(): JSX.Element {
  const { userInfo } = useUser();
  const [assetIcon, setAssetIcon] = useState<string>("");
  const [isAddress, setIsAddress] = useState<
    "notAddress" | "searching" | "address" | null
  >(null);

  const onChangeAsset = (_v: any, option: any) => {
    setAssetIcon(option.icon);
  };

  const onChangeAddress = (event: any) => {
    let timer;
    clearTimeout(timer);
    setIsAddress("searching");
    timer = setTimeout(() => {
      //"0x8ba1f109551bd432803012645ac136ddd64dba72"
      setIsAddress(
        ethers.isAddress(event.target.value) ? "address" : "notAddress"
      );
    }, 5000);
  };

  return (
    <div className={styles.container}>
      <GlassCard>
        <div className={styles.layout}>
          <Title level={4}>Send</Title>
          <Form name="send" size="large" layout="vertical" autoComplete="off">
            <Form.Item label="Reciver Address" name="reciveraddress">
              <Input
                onChange={onChangeAddress}
                autoCorrect="false"
                spellCheck={false}
                suffix={
                  isAddress == "searching" ? (
                    <Spin indicator={antIcon} />
                  ) : isAddress == "address" ? (
                    <CheckCircleTwoTone />
                  ) : (
                    <WarningTwoTone twoToneColor="#eb2f96" />
                  )
                }
              />
            </Form.Item>
            <Form.Item label="Asset" name="asset">
              <Select
                showSearch
                placeholder="Select an Asset"
                optionFilterProp="children"
                defaultActiveFirstOption
                suffixIcon={
                  assetIcon == "" ? null : (
                    <Image
                      src={assetIcon}
                      alt={assetIcon}
                      width={28}
                      height={28}
                    />
                  )
                }
                onChange={onChangeAsset}
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

            <Form.Item label="Amount" name="amount">
              <InputNumber
                min={0}
                addonAfter={<Button text="max 144$" type="text" />}
                width="222"
              />
            </Form.Item>
            <Form.Item>
              <Button text="Send" type="primary" htmlType="submit" />
            </Form.Item>
          </Form>
        </div>
      </GlassCard>
    </div>
  );
}
