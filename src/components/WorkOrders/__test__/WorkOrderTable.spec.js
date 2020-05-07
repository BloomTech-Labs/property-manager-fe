import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
import WorkOrderTable from '../WorkOrderTable';

afterEach(rtl.cleanup);

test('Makes sure the word status exists', async () => {
  const wrapper = rtl.render(<WorkOrderTable />);
  expect(await wrapper.queryAllByText(/status/i));
});

test('snapshot', () => {
  const { container } = rtl.render(<WorkOrderTable />);
  expect(container.firstChild).toMatchSnapshot();
});
