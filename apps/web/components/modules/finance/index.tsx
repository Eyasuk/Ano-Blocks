"use client";
import { Tabs, Typography } from "antd";
import type { TabsProps } from "antd";
import { GlassCard } from "components/elements/cards";
import { GetLoan } from "components/modules/finance/getLoan";
import { PayLoan } from "components/modules/finance/payLoan";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: `Get Loan`,
    children: <GetLoan />,
  },
  {
    key: "2",
    label: `Pay Loan`,
    children: <PayLoan />,
  },
  {
    key: "3",
    label: `History`,
    children: <p>h</p>,
  },
];
export default function Finance(): JSX.Element {
  return (
    <GlassCard>
      <Tabs defaultActiveKey="1" items={items} />{" "}
    </GlassCard>
  );
}
