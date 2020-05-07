import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
import WorkOrderModal from '../WorkOrderModal';

afterEach(rtl.cleanup);

test('Makes sure the word Freehold exists on LP', async () => {
  const wrapper = rtl.render(<WorkOrderModal />);
  expect(await wrapper.queryAllByText(/freehold/i));
});

test('snapshot', () => {
  const { container } = rtl.render(<WorkOrderModal />);
  expect(container.firstChild).toMatchSnapshot();
});
