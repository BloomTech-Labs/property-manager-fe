import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../../../store';
import EditProperty from '../EditProperty';

afterEach(rtl.cleanup);

test('snapshot EditProperty', () => {
  const { wrapper } = rtl.render(
    <Provider store={store}>
      <EditProperty />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});

test('Renders', () => {
  const { wrapper } = rtl.render(
    <Provider store={store}>
      <EditProperty />
    </Provider>
  );
  expect(wrapper).not.toBeNull();
});
