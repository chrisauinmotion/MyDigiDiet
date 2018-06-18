import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import './styles/reduction.css';
import { LayoutRoute, MainLayout } from './components/Layout';

// pages
import ChartPage from './pages/ChartPage';
import DashboardPage from './pages/DashboardPage';
import TablePage from './pages/TablePage';
import WidgetPage from './pages/WidgetPage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <LayoutRoute
              exact
              path="/"
              layout={MainLayout}
              component={DashboardPage}
            />
            <LayoutRoute
              exact
              path="/widgets"
              layout={MainLayout}
              component={WidgetPage}
            />
            <LayoutRoute
              exact
              path="/tables"
              layout={MainLayout}
              component={TablePage}
            />
            <LayoutRoute
              exact
              path="/charts"
              layout={MainLayout}
              component={ChartPage}
            />
            <Redirect to="/" />
          </Switch>
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
