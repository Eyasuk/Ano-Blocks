import { Row, Col } from "antd";
import Default from "components/layouts/default";
import Convert from "components/modules/convert";
import CurrencyInfo from "components/modules/currencyInfo";

export default function CurrencyInfoPage({
  params,
}: {
  params: { slug: string };
}): JSX.Element {
  return (
    <Default>
      <Row
        gutter={[
          { xs: 15, sm: 4, md: 4, lg: 20 },
          { xs: 15, sm: 4, md: 4, lg: 20 },
        ]}
      >
        <Col md={12} xs={24} lg={16} span={16}>
          {" "}
          <CurrencyInfo params={params} />
        </Col>
        <Col md={12} xs={24} lg={6} span={6}>
          {" "}
          <Convert params={params} />
          <div>d</div>
          {/* <CurrencyInfo params={params} />
          <CurrencyInfo params={params} /> */}
        </Col>
      </Row>
    </Default>
  );
}
