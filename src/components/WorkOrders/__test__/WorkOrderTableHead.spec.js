import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
import WorkOrderTableHead from '../WorkOrderTableHead';

afterEach(rtl.cleanup);

test('Makes sure the word type exists', async () => {
  const wrapper = rtl.render(<WorkOrderTableHead />);
  expect(await wrapper.queryAllByText(/type/i));
});

test('snapshot', () => {
  const { container } = rtl.render(<WorkOrderTableHead />);
  expect(container.firstChild).toMatchSnapshot();
});
