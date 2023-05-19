import { useEffect, useState } from "react";
import { Divider, Result, Typography } from "antd";
import { BigNumberish, TransactionResponse, formatUnits } from "ethers";
import Button from "components/elements/buttons";
import { notification } from "components/elements/notification";
import Modal from "components/elements/modal";
import { useSetting } from "utils/context/settings";
import { useNetwork } from "utils/context/network";
import { useUserBalance } from "utils/context/userBalance";
import { useUser } from "utils/context/user";
import { numberPrecision } from "utils/helpers/numberPrecision";
import {
  getGasPrice,
  sendContractToken,
  sendToken,
} from "utils/helpers/transaction";
import { prices } from "utils/helpers/assets";
import { SendConfirmProps } from "./type";

import styles from "./sendConfirm.module.scss";

const { Title, Text } = Typography;

export default function SendConfirm({
  address,
  asset,
  amount,
  open,
  onCancel,
}: SendConfirmProps): JSX.Element {
  const { provider, choosenNetwork } = useNetwork();
  const { userSetting } = useSetting();
  const { userBalance } = useUserBalance();
  const { userInfo } = useUser();
  const [gasPrice, setGasPrice] = useState(0);
  const [price, setPrice] = useState<any>();
  const [buttonLoading, setButtonloading] = useState<boolean>(false);
  const [transactionState, setTransactionState] = useState<
    "ongoing" | "error" | "success"
  >("ongoing");
  const [transactionHash, setTransactionHash] = useState<string>("");

  const verifyTx = () => {
    const work = async () => {
      setButtonloading(true);
      try {
        if (provider && userInfo) {
          if (choosenNetwork.currency == asset) {
            const result = await sendToken(
              provider,
              amount,
              userInfo.priv,
              userInfo?.pubad,
              address
            );
            if (result.result && result)
              console.log((result.data as TransactionResponse).hash);
            setTransactionHash((result.data as TransactionResponse).hash);
          } else {
            // await sendContractToken(
            //   provider,userInfo.priv,value.receiveraddress,{
            //     Assets.
            //   }
            // )
          }
        }
        setTransactionState("success");
      } catch (err) {
        setTransactionState("error");
        notification({
          message: "error occured",
          messageType: "error",
          description: err as string,
        });
      } finally {
        setButtonloading(false);
      }
    };

    work();
  };

  useEffect(() => {
    const work = async () => {
      console.log("is this working");
      if (provider) {
        const gas = await getGasPrice(provider);
        const priceResponse = await prices();
        setPrice(priceResponse);
        formatUnits(gas.gasPrice as BigNumberish, "ether");
        const gasInEther = Number(
          Number(formatUnits(gas.gasPrice as BigNumberish, "ether")).toFixed(20)
        );
        setGasPrice(gasInEther);
      }
    };
    work();
  }, [provider]);

  return (
    <Modal
      open={open}
      centered={true}
      closable={false}
      onCancel={onCancel}
      maskClosable={false}
    >
      {transactionState == "ongoing" ? (
        <div className={styles.container}>
          <Title className={styles.title} level={4}>
            Confirm Sending test
          </Title>

          <span>
            <Text type="secondary">Sending</Text>
            <Text strong type="success">
              {" " + asset + " "}
            </Text>
            <Text type="secondary">to</Text>
            <Text strong type="success">
              {" " + address}
            </Text>
          </span>
          <Divider />
          <div className={styles.flexRow}>
            <Text type="secondary">Amount to send</Text>
            <div className={styles.flexColumn}>
              <span>
                <Text
                  className={styles.primaryCurrency}
                  strong
                >{`${amount} `}</Text>
                <Text>{asset}</Text>
              </span>

              {userSetting && (
                <span>
                  <Text className={styles.secondryCurrency} type="secondary">
                    {price &&
                      (userSetting.currencyConversion == "ETB"
                        ? `${numberPrecision(price[asset].price * 55 * amount)}`
                        : `${price[asset].price * amount}`)}
                  </Text>
                  <Text type="secondary">
                    {userSetting.currencyConversion == "ETB" ? ` ETB` : ` USD`}
                  </Text>
                </span>
              )}
            </div>
          </div>
          <Divider />
          <div className={styles.flexRow}>
            <Text type="secondary">Gas price + Transaction fee</Text>
            <div className={styles.flexColumn}>
              <span>
                <Text
                  className={styles.primaryCurrency}
                  strong
                >{`${gasPrice} `}</Text>
                <Text>{asset}</Text>
              </span>

              {userSetting && (
                <span>
                  <Text className={styles.secondryCurrency} type="secondary">
                    {price &&
                      (userSetting.currencyConversion == "ETB"
                        ? `${numberPrecision(
                            price[asset].price * 55 * gasPrice
                          )}`
                        : `${numberPrecision(price[asset].price * gasPrice)}`)}
                  </Text>
                  <Text type="secondary">
                    {userSetting.currencyConversion == "ETB" ? ` ETB` : ` USD`}
                  </Text>
                </span>
              )}
            </div>
          </div>
          <Divider />
          <div className={styles.flexRow}>
            <Text type="secondary">Total Amount + Transaction fee</Text>
            <div className={styles.flexColumn}>
              <span>
                <Text className={styles.primaryCurrency} strong>{`${
                  amount + gasPrice
                } `}</Text>
                <Text>{asset}</Text>
              </span>

              {userSetting && (
                <span>
                  <Text className={styles.secondryCurrency} type="secondary">
                    {price &&
                      (userSetting.currencyConversion == "ETB"
                        ? `${numberPrecision(
                            price[asset].price * 55 * (amount + gasPrice)
                          )}`
                        : `${price[asset].price * (amount + gasPrice)}`)}
                  </Text>
                  <Text type="secondary">
                    {userSetting.currencyConversion == "ETB" ? ` ETB` : ` USD`}
                  </Text>
                </span>
              )}
            </div>
          </div>
          <Divider />
          <div className={styles.flexRow}>
            <div className={styles.button}>
              <Button
                text="Reject"
                size="large"
                block
                onClick={onCancel}
                disabled={buttonLoading}
              />
            </div>
            <div className={styles.button}>
              <Button
                text="Confirm"
                type="primary"
                size="large"
                block
                onClick={verifyTx}
                loading={buttonLoading}
              />
            </div>
          </div>
        </div>
      ) : transactionState == "success" ? (
        <Result
          status="success"
          title="Successfully Sent "
          subTitle={`${amount} ${asset} sent to ${address} transaction hash ${transactionHash}`}
          extra={[
            <Button type="primary" key="home" text="Go to dashbord" />,

            <Button
              key="transaction"
              text="Another transaction"
              onClick={onCancel}
            />,
          ]}
        />
      ) : (
        <Result
          status="warning"
          title="There are some problems with your operation."
          extra={
            <Button
              type="primary"
              key="console"
              text="Go Dashbord
            "
            />
          }
        />
      )}
    </Modal>
  );
}
