import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../../../store';
import Properties from '../Properties';

afterEach(rtl.cleanup);

test('Properties renders', () => {
  const wrapper = rtl.render(
    <Provider store={store}>
      <Properties />
    </Provider>
  );

  expect(wrapper).toMatchSnapshot();
});
