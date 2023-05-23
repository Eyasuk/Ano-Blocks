"use client";
import { Col, Row } from "antd";
import Default from "components/layouts/default";
import EtbcWallet from "components/modules/etbcwalletcard";
import Postion from "components/modules/position_summary";
import Assets from "components/modules/assets";
import Wallet from "components/modules/walletcard";

export default function HomePage(): JSX.Element {
  return (
    <Default>
      <Row
        gutter={[
          { xs: 15, sm: 4, md: 4, lg: 26 },
          { xs: 15, sm: 4, md: 4, lg: 20 },
        ]}
      >
        <Col md={10} xs={24} span={12}>
          <Wallet />
        </Col>
        <Col md={12} xs={24} span={22}>
          <EtbcWallet />
        </Col>
        <Col md={12} xs={24} lg={12} span={6}>
          <Assets />
        </Col>
        <Col md={12} xs={24} lg={10} span={6}>
          <Postion />
        </Col>
      </Row>
    </Default>
  );
}
