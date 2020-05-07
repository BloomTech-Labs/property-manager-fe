import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
import NoWorkOrder from '../NoWorkOrder';

afterEach(rtl.cleanup);

test('Makes sure the word work order exists', async () => {
  const wrapper = rtl.render(<NoWorkOrder />);
  expect(await wrapper.queryAllByText(/work order/i));
});

test('snapshot', () => {
  const { container } = rtl.render(<NoWorkOrder />);
  expect(container.firstChild).toMatchSnapshot();
});
