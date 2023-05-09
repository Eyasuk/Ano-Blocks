"use client";
import { Col, Row } from "antd";
import Default from "components/layouts/default";
import EtbcWallet from "components/modules/etbcwalletcard";
import Postion from "components/modules/position_summary";
import Assets from "components/modules/assets";
import Wallet from "components/modules/walletcard";
import { useUser } from "utils/context/user";
import { useNetwork } from "utils/context/network";
import { useEffect } from "react";

export default function HomePage(): JSX.Element {
  const { userLoggedin } = useUser();

  return (
    <Default>
      <Row
        gutter={[
          { xs: 15, sm: 4, md: 4, lg: 26 },
          { xs: 15, sm: 4, md: 4, lg: 20 },
        ]}
      >
        <Col className="gutter-row" md={10} xs={24} span={12}>
          {userLoggedin && <Wallet />}
        </Col>
        <Col className="gutter-row" md={12} xs={24} span={22}>
          <EtbcWallet />
        </Col>
        <Col className="gutter-row" md={12} xs={24} lg={12} span={6}>
          <Assets />
        </Col>
        <Col className="gutter-row" md={12} xs={24} lg={10} span={6}>
          <Postion />
        </Col>
      </Row>
    </Default>
  );
}
