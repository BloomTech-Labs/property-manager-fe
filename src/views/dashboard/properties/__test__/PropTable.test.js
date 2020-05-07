import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../../../store';
import PropTable from '../PropTable';

afterEach(rtl.cleanup);

test('snapshot', () => {
  const { container } = rtl.render(
    <Provider store={store}>
      <PropTable />
    </Provider>
  );
  expect(container.firstChild).toMatchSnapshot();
});

test('Renders with name column', () => {
  const wrapper = rtl.render(
    <Provider store={store}>
      <PropTable />
    </Provider>
  );
  expect(wrapper.getByText(/name/i)).not.toBeNull();
});
