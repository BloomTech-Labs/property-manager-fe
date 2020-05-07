import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
import WorkOrderTableBody from '../WorkOrderTableBody';

afterEach(rtl.cleanup);

test('Makes sure the word description exists', async () => {
  const wrapper = rtl.render(<WorkOrderTableBody />);
  expect(await wrapper.queryAllByText(/description/i));
});

test('snapshot', () => {
  const { container } = rtl.render(<WorkOrderTableBody />);
  expect(container.firstChild).toMatchSnapshot();
});
