import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../../store';
import SideNav from '../SideNav/SideNav';

afterEach(rtl.cleanup);

test('snapshot SideNav', () => {
  const { wrapper } = rtl.render(
    <Provider store={store}>
      <SideNav />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});

test('Renders', () => {
  const { wrapper } = rtl.render(
    <Provider store={store}>
      <SideNav />
    </Provider>
  );
  expect(wrapper).not.toBeNull();
});
