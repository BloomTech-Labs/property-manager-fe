import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../../../store';
import CreateProperty from '../CreateProperty';

afterEach(rtl.cleanup);

test('snapshot CreateProperty', () => {
  const { wrapper } = rtl.render(
    <Provider store={store}>
      <CreateProperty />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});

test('Renders', () => {
  const { wrapper } = rtl.render(
    <Provider store={store}>
      <CreateProperty />
    </Provider>
  );
  expect(wrapper).not.toBeNull();
});
