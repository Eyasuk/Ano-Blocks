"use client";
import { Tabs, Typography } from "antd";
import type { TabsProps } from "antd";
import Default from "components/layouts/default";
import { GlassCard } from "components/elements/cards";
import {
  DepositTransaction,
  SendTransaction,
} from "components/modules/transaction";

import styles from "./transaction.module.scss";

const { Text, Title } = Typography;

const items: TabsProps["items"] = [
  {
    key: "1",
    label: `Deposits`,
    children: <DepositTransaction />,
  },
  {
    key: "2",
    label: `Send`,
    children: <SendTransaction />,
  },
];
export default function Transaction(): JSX.Element {
  return (
    <Default>
      <div className={styles.layout}>
        <Title level={3}>Transactions </Title>
        <div className={styles.desc}>
          <Text>
            All transaction are recorded only in this device.To get your
            transaction on other devices you can import/export in setting or
            view on blockexplorer!!{" "}
          </Text>
        </div>
        <GlassCard>
          <Tabs defaultActiveKey="1" items={items} />{" "}
        </GlassCard>
      </div>
    </Default>
  );
}
