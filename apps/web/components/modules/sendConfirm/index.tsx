import { useEffect, useState } from "react";
import { Divider, Typography } from "antd";
import Modal from "components/elements/modal";
import { getGasPrice } from "utils/helpers/transaction";
import { useSetting } from "utils/context/settings";
import { useNetwork } from "utils/context/network";
import { useUserBalance } from "utils/context/userBalance";
import { numberPrecision } from "utils/helpers/numberPrecision";
import { prices } from "utils/helpers/assets";
import { SendConfirmProps } from "./type";

import styles from "./sendConfirm.module.scss";
import { BigNumberish, formatUnits } from "ethers";
import Button from "components/elements/buttons";

const { Title, Text } = Typography;

export default function SendConfirm({
  address,
  asset,
  amount,
  open,
  onCancel,
}: SendConfirmProps): JSX.Element {
  const { provider } = useNetwork();
  const { userSetting } = useSetting();
  const { userBalance } = useUserBalance();
  const [gasPrice, setGasPrice] = useState(0);
  const [price, setPrice] = useState<any>();

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
    <Modal open={open} centered={true} closable={false} onCancel={onCancel}>
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
                      ? `${numberPrecision(price[asset].price * 55 * gasPrice)}`
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
            <Button text="Reject" size="large" block onClick={onCancel} />
          </div>
          <div className={styles.button}>
            <Button text="Confirm" type="primary" size="large" block />
          </div>
        </div>
      </div>
    </Modal>
  );
}
