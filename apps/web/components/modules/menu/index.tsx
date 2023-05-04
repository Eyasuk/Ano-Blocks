"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Layout, Menu, Typography } from "antd";
import type { MenuProps } from "antd";
import {
  CreditCardIcon,
  DesktopIcon,
  DaoIcon,
  LockIcon,
  LogoutIcon,
  ReceiveIcon,
  SendIcon,
  SettingIcon,
  SwapIcon,
} from "components/elements/icons";

import styles from "./menu.module.scss";
import Link from "next/link";

const { Sider } = Layout;
const { Title } = Typography;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const mainRoutes: MenuItem[] = [
  { type: "divider" },
  getItem(
    "Dashboard",
    "1",
    <Link href="/">
      <DesktopIcon />
    </Link>
  ),
  getItem("Dao", "2", <DaoIcon />),
  { type: "divider" },
  getItem(
    "Swap",
    "3",
    <Link href="/swap">
      <SwapIcon />
    </Link>
  ),
  getItem(
    "Send",
    "4",
    <Link href="/send">
      <SendIcon />
    </Link>
  ),
  getItem("Deposit/Withdraw", "5", <ReceiveIcon />),
  getItem("Buy/Sell", "6", <CreditCardIcon />),
  { type: "divider" },
];

const subRoutes: MenuItem[] = [
  { type: "divider" },
  getItem(
    "Setting",
    "1",
    <Link href="/setting">
      <SettingIcon />
    </Link>
  ),
  getItem("Lock", "2", <LockIcon />),
  getItem("Logout", "3", <LogoutIcon />),
  { type: "divider" },
];

export function MenuBar() {
  const [collapsed, setCollapsed] = useState(false);
  const [title, setTitle] = useState(!collapsed);

  useEffect(() => {
    if (collapsed) setTitle(false);
    else {
      setTimeout(() => {
        setTitle(true);
      }, 150);
    }
  }, [collapsed]);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value: boolean) => setCollapsed((prev) => !prev)}
      theme="light"
    >
      <div className={styles.logo}>
        <Image
          className={styles.image}
          alt="logo of ano block"
          src="/icons/logo.svg"
          height={0}
          width={0}
        />
        {title ? (
          <Title level={4} className={styles.title}>
            AnoBlocks{" "}
          </Title>
        ) : null}
      </div>
      <div className={styles.menu}>
        <Menu defaultSelectedKeys={["1"]} items={mainRoutes} theme="light" />
        <Menu items={subRoutes} theme="light" />
      </div>
    </Sider>
  );
}
