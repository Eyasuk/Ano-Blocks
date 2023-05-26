"use client";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Default from "components/layouts/default";
import { GlassCard } from "components/elements/cards";
import {
  DepositTransaction,
  SendTransaction,
} from "components/modules/transaction";

import styles from "./transaction.module.scss";

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
        <GlassCard>
          <Tabs defaultActiveKey="1" items={items} />{" "}
        </GlassCard>
      </div>
    </Default>
  );
}
