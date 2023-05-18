"use client";
import { useState } from "react";
import Image from "next/image";
import { ethers } from "ethers";
import { Form, Input, InputNumber, Select, Spin, Typography } from "antd";
import {
  CheckCircleTwoTone,
  LoadingOutlined,
  WarningTwoTone,
} from "@ant-design/icons";
import { GlassCard } from "components/elements/cards";
import Button from "components/elements/buttons";
import { notification } from "components/elements/notification";
import SendConfirm from "components/modules/sendConfirm";
import { useUser } from "utils/context/user";
import { Assets } from "utils/constants/assets";
import { sendToken } from "utils/helpers/transaction";
import { useNetwork } from "utils/context/network";
import { useUserBalance } from "utils/context/userBalance";

import styles from "./send.module.scss";

const { Title } = Typography;

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function Send(): JSX.Element {
  const [form] = Form.useForm();
  const { userInfo } = useUser();
  const { userBalance } = useUserBalance();
  const { provider, choosenNetwork } = useNetwork();
  const [assetIcon, setAssetIcon] = useState<string>("");
  const [isAddress, setIsAddress] = useState<
    "notAddress" | "searching" | "address" | null
  >(null);
  const [selectedAsset, setSelectedAsset] = useState();
  const [confirmOpen, setConfirmOpen] = useState<boolean>(false);

  const handleCancel = () => {
    setConfirmOpen(false);
  };

  const onChangeAsset = (_v: any, option: any) => {
    setAssetIcon(option.icon);
    setSelectedAsset(_v);
    form.setFieldsValue({
      amount: undefined,
    });
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

  const setMaxiumum = () => {
    if (selectedAsset)
      form.setFieldsValue({
        amount: userBalance[selectedAsset]["total"],
      });
  };

  const verifyTx = (value: any) => {
    console.log(value);
    console.log(form.getFieldValue("amount"));
    const work = async () => {
      try {
        if (isAddress != "address") {
          notification({
            message: "Invalid Address",
            description: "enter valid address",
            messageType: "error",
          });
          return;
        }

        if (provider && userInfo) {
          if (choosenNetwork.currency == value.asset) {
            await sendToken(
              provider,
              0.3,
              userInfo.priv,
              userInfo?.pubad,
              value.receiveraddress
            );
          } else {
            // await sendContractToken(
            //   provider,userInfo.priv,value.receiveraddress,{
            //     Assets.
            //   }
            // )
          }
        }
      } catch (err) {
        notification({
          message: "error occured",
          messageType: "error",
          description: err as string,
        });
      }
    };
    //
    setConfirmOpen(true);
    //work();
  };

  return (
    <>
      {form.getFieldValue("asset") && (
        <SendConfirm
          open={confirmOpen}
          onCancel={handleCancel}
          address={form.getFieldValue("receiveraddress")}
          asset={form.getFieldValue("asset")}
          amount={form.getFieldValue("amount")}
        />
      )}
      <div className={styles.container}>
        <GlassCard>
          <div className={styles.layout}>
            <Title level={4}>Send</Title>
            <Form
              name="send"
              form={form}
              size="large"
              layout="vertical"
              autoComplete="off"
              onFinish={verifyTx}
            >
              <Form.Item
                label="Receiver Address"
                name="receiveraddress"
                rules={[
                  {
                    required: true,
                    message: `Please Input Receiver!`,
                  },
                ]}
              >
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
              <Form.Item
                label="Asset"
                name="asset"
                rules={[
                  {
                    required: true,
                    message: `Please Select Asset!`,
                  },
                ]}
              >
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

              <Form.Item
                label="Amount"
                name="amount"
                rules={[
                  {
                    required: true,
                    message: `Please Input Amount!`,
                  },
                ]}
              >
                <InputNumber
                  min={0}
                  max={selectedAsset && userBalance[selectedAsset]["total"]}
                  addonAfter={
                    selectedAsset != undefined && (
                      <Button
                        text={`max ${userBalance[selectedAsset]["total"]}`}
                        type="text"
                        onClick={setMaxiumum}
                      />
                    )
                  }
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
    </>
  );
}
