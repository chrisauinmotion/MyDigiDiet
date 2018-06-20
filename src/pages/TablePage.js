import Page from '../components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

const TablePage = () => {
  return (
    <Page
      title="Tables"
      breadcrumbs={[{ name: 'tables', active: true }]}
      className="TablePage">
      <Row>
        <Col>
          <Card className="mb-3">
            <CardHeader>Top 10 Most Visited Domains</CardHeader>
            <CardBody>
              <Row>
                <Col>
                  <Card body>
                    <Table striped="true">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Domain</th>
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
                        <tr>
                          <th scope="row">4</th>
                          <td>slack.com</td>
                          <td>600</td>
                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          <td>youtube.com</td>
                          <td>431</td>
                        </tr>
                        <tr>
                          <th scope="row">6</th>
                          <td>amazon.com</td>
                          <td>301</td>
                        </tr>
                        <tr>
                          <th scope="row">7</th>
                          <td>cheatorgraphy.com</td>
                          <td>214</td>
                        </tr>
                        <tr>
                          <th scope="row">8</th>
                          <td>medium.com</td>
                          <td>201</td>
                        </tr>
                        <tr>
                          <th scope="row">9</th>
                          <td>repl.it</td>
                          <td>164</td>
                        </tr>
                        <tr>
                          <th scope="row">10</th>
                          <td>jquery.com</td>
                          <td>148</td>
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
};

export default TablePage;
