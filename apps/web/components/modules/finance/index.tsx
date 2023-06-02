"use client";
import { Tabs, Typography } from "antd";
import type { TabsProps } from "antd";
import { GlassCard } from "components/elements/cards";

const { Text, Title } = Typography;

const items: TabsProps["items"] = [
  {
    key: "1",
    label: `Get Loan`,
    children: <p>d</p>,
  },
  {
    key: "2",
    label: `Pay Loan`,
    children: <p>s</p>,
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
