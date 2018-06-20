import React from 'react';
import { Row, Col } from 'reactstrap';
import Page from '../components/Page';
import NumberWidget from '../components/NumberWidget';

import { numberWidgetsData } from '../demos/widgetPage';

const WidgetPage = () => {
  return (
    <Page
      className="WidgetPage"
      title="Trends"
      breadcrumbs={[{ name: 'widgets', active: true }]}
    >
      <Row>
        {numberWidgetsData.map(({ color, title, number, subtitle }, index) => (
          <Col key={index} lg={4} md={6} sm={6} xs={12} className="mb-3">
            <NumberWidget
              title={ title }
              subtitle={ subtitle }
              number={ number }
              color={color}
              progress={{
                value: 75,
              }}
            />
          </Col>
        ))}
      </Row>
    </Page>
  );
};

export default WidgetPage;
