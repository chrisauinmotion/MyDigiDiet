import React from 'react';
import { Row, Col } from 'reactstrap';
import Page from '../components/Page';
import NumberWidget from '../components/NumberWidget';

import { numberWidgetsData } from '../demos/widgetPage';

const WidgetPage = () => {
  return (
    <Page
      className="WidgetPage"
      title="Widgets"
      breadcrumbs={[{ name: 'widgets', active: true }]}
    >
      <Row>
        {numberWidgetsData.map(({ color }, index) => (
          <Col key={index} lg={4} md={6} sm={6} xs={12} className="mb-3">
            <NumberWidget
              title="Total Profit"
              subtitle="This month"
              number="$17,800"
              color={color}
              progress={{
                value: 75,
                label: 'Last month',
              }}
            />
          </Col>
        ))}
      </Row>
    </Page>
  );
};

export default WidgetPage;
