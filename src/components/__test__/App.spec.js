import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import App from '../../App';

afterEach(rtl.cleanup);

test('Render easy communication', async () => {
  // render our React app into an in-memory DOM so we can test against it
  const wrapper = await rtl.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(await wrapper.queryAllByText(/easy communication/i));
});

test('snapshot', async () => {
  const { container } = await rtl.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(container.firstChild).toMatchSnapshot();
});
