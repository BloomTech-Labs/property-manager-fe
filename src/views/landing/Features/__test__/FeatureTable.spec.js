import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
import FeatureTable from '../FeatureTable';

afterEach(rtl.cleanup);

test('Makes sure the word free exists on LP', async () => {
  const wrapper = rtl.render(<FeatureTable />);
  expect(await wrapper.queryAllByText(/free/i));
});

test('snapshot', () => {
  const { container } = rtl.render(<FeatureTable />);
  expect(container.firstChild).toMatchSnapshot();
});
