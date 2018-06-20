import React from 'react';
import { getColor } from '../utils/colors';
import { randomNum } from '../utils/demos';
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import { Line, Pie, Bar } from 'react-chartjs-2';
import Page from '../components/Page';

const MONTHS = ['January', 'February', 'March', 'April', 'May'];

const genLineData = (moreData = {}, moreData2 = {}, moreData3 = {}, moreData4 = {}, moreData5 = {}) => {
  return {
    labels: MONTHS,
    datasets: [
      {
        label: 'Sports',
        backgroundColor: getColor('primary'),
        borderColor: getColor('primary'),
        borderWidth: 1,
        data: [
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
        ],
        ...moreData,
      },
      {
        label: 'News',
        backgroundColor: getColor('secondary'),
        borderColor: getColor('secondary'),
        borderWidth: 1,
        data: [
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
        ],
        ...moreData2,
      },
      {
        label: 'Social Media',
        backgroundColor: getColor('success'),
        borderColor: getColor('success'),
        borderWidth: 1,
        data: [
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
        ],
        ...moreData3,
      },
      {
        label: 'Shopping',
        backgroundColor: getColor('info'),
        borderColor: getColor('info'),
        borderWidth: 1,
        data: [
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
        ],
        ...moreData4,
      },
      {
        label: 'Video Streaming',
        backgroundColor: getColor('danger'),
        borderColor: getColor('danger'),
        borderWidth: 1,
        data: [
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
        ],
        ...moreData5,
      },
    ],
  };
};

const genPieData = () => {
  return {
    datasets: [
      {
        data: [randomNum(), randomNum(), randomNum(), randomNum(), randomNum()],
        backgroundColor: [
          getColor('primary'),
          getColor('secondary'),
          getColor('success'),
          getColor('info'),
          getColor('danger'),
        ],
        label: 'Dataset 1',
      },
    ],
    labels: ['Sports', 'News', 'Social Media', 'Shopping', 'Video Streaming'],
  };
};

const ChartPage = () => {
  return (
    <Page title="Charts" breadcrumbs={[{ name: 'Charts', active: true }]}>
      <Row>
        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Category Visits Per Month (Bar Chart)</CardHeader>
            <CardBody>
              <Bar data={genLineData()} />
            </CardBody>
          </Card>
        </Col>

        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Category Visits Per Month (Line Chart)</CardHeader>
            <CardBody>
              <Line data={genLineData({ fill: false }, { fill: false }, { fill: false }, { fill: false }, { fill: false })} />
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Site Categories</CardHeader>
            <CardBody>
              <Pie data={genPieData()} />
            </CardBody>
          </Card>
        </Col>

        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Category Visits Per Month (Combo Bar / Line)</CardHeader>
            <CardBody>
              <Bar data={genLineData({ type: 'line', fill: false }, { type: 'bar' }, { type: 'line', fill: false }, { type: 'bar' }, { type: 'line', fill: false })} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default ChartPage;
