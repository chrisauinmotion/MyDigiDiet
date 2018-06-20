import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Row,
  Col,
  Table,
} from 'reactstrap';
import { Line } from 'react-chartjs-2';
import { chartjs } from '../demos/dashboardPage';
import Page from '../components/Page';
import NumberWidget from '../components/NumberWidget';

class DashboardPage extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {

    return (
      <Page
        className="DashboardPage"
        title="Dashboard"
        breadcrumbs={[{ name: 'Dashboard', active: true }]}>
        <Row>
          <Col lg={4} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Avg Visits Per Day"
              subtitle="This month"
              number="193"
              color="secondary"
            />
          </Col>

          <Col lg={4} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Most Visited Domain"
              subtitle="google.com"
              number="2,217"
              color="secondary"
            />
          </Col>

          <Col lg={4} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Visit Count On Busiest Day"
              subtitle="April 27, 2018"
              number="670"
              color="secondary"
            />
          </Col>
        </Row>

        <Row>
          <Col lg="11" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>
                Avg Visits Per Day{' '}
                <small className="text-muted text-capitalize">By Month</small>
              </CardHeader>
              <CardBody>
                <Line data={chartjs.line.data} options={chartjs.line.options} />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>TOP 3 MOST VISITED SITES</CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <Card body>
                      <Table striped>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Domain Name</th>
                            <th>Visit Count</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>google.com</td>
                            <td>2,217</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>github.com</td>
                            <td>1,862</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>fullstackacademy.com</td>
                            <td>1,654</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}
export default DashboardPage;
