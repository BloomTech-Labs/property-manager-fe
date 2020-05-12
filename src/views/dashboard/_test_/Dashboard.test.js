import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import Container from '@material-ui/core/Container';
import initialStore from '../../../store';
import Dashboard from '../Dashboard';
import Overview from '../overview/Overview';
import PropertyStatusChart from '../overview/PropertyStatusChart';
import PropertyStatusCards from '../overview/PropertyStatusCards';
import WorkOrderCard from '../overview/WorkOrderCard';
import SideNav from '../../../components/Navigation/SideNav/SideNav';
import PropManTheme from '../../../theme/PropmanTheme';

afterEach(cleanup);

describe('With React Testing Library', () => {
  it('Shows "Hello world!"', () => {
    const { asFragment } = render(
      <Provider store={initialStore}>
        <Dashboard />
      </Provider>
    );

    expect(asFragment(<Dashboard />)).toMatchSnapshot();
  });

  it('dashboard renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={initialStore}>
        <Dashboard />
      </Provider>,
      div
    );
  });

  it('renders navigation without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={initialStore}>
        <SideNav />
      </Provider>,
      div
    );
  });

  it('renders navigation without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={initialStore}>
        <PropManTheme />
      </Provider>,
      div
    );
  });

  it('renders navigation without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={initialStore}>
        <Container />
      </Provider>,
      div
    );
  });

  it('renders "Dashboard Profile Properties Tenants Work Orders Logout" ', () => {
    const container = document.createElement('div');
    ReactDOM.render(
      <Provider store={initialStore}>
        <Dashboard />
      </Provider>,
      container
    );
    expect(container.textContent).toMatch(
      'DashboardProfilePropertiesTenantsWork OrdersLogout'
    );
  });

  it('renders "No Work Orders Or Properties Listed " when no properties or work orders created ', () => {
    const container = document.createElement('div');
    ReactDOM.render(
      <Provider store={initialStore}>
        <Overview />
        <PropertyStatusChart propertyTotalArray={[]} />
        <PropertyStatusCards propertyTotalArray={[]} propertyList={[]} />
        <WorkOrderCard workOrderTotalArray={[]} />
      </Provider>,
      container
    );
    expect(container.textContent).toMatch(
      'No Work Orders Or Properties Listed '
    );
  });

  it('renders an image', () => {
    const container = document.createElement('img');
    ReactDOM.render(
      <Provider store={initialStore}>
        <Overview />
      </Provider>,
      container
    );
    expect(container.nodeType).toBe(1);
  });

  it('renders Logout button', () => {
    const button = 'Logout';
    const { getByText } = render(
      <Provider store={initialStore}>
        <SideNav />
      </Provider>
    );
    expect(getByText(button)).toBeTruthy();
  });
});
