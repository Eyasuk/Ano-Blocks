import { useState } from "react";
import { Menu, MenuProps } from "antd";

import { useNetwork } from "utils/context/network";

import styles from "./chooseNetwork.module.scss";

export default function ChooseNetwork(): JSX.Element {
  const { addNetwork, networks, setChoosenNetwork, choosenNetwork } =
    useNetwork();
  const onClick: MenuProps["onClick"] = (e) => {
    setChoosenNetwork(networks[e.key]);
  };

  return (
    <div className={styles.container}>
      <Menu
        onClick={onClick}
        style={{ width: 180, borderRadius: 10 }}
        defaultSelectedKeys={[choosenNetwork.name]}
        mode="inline"
      >
        <Menu.SubMenu title={"Network: " + choosenNetwork.name}>
          {" "}
          {Object.keys(networks).map((network) => {
            return <Menu.Item key={network}>{network}</Menu.Item>;
          })}
        </Menu.SubMenu>
      </Menu>
    </div>
  );
}
