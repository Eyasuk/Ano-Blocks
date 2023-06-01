"use client";
import { Col, Row } from "antd";
import Default from "components/layouts/default";
import CreditScore from "components/modules/creditScore";

export default function Finance(): JSX.Element {
  return (
    <Default>
      <Row
        gutter={[
          { xs: 15, sm: 4, md: 4, lg: 26 },
          { xs: 15, sm: 4, md: 4, lg: 20 },
        ]}
      >
        <Col md={10} xs={24} span={12}>
          <CreditScore />
        </Col>
        <Col md={12} xs={24} span={22}>
          <div></div>{" "}
        </Col>
        <Col md={12} xs={24} lg={12} span={6}>
          <div></div>{" "}
        </Col>
        <Col md={12} xs={24} lg={10} span={6}>
          <div></div>{" "}
        </Col>
      </Row>
    </Default>
  );
}
