import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
import FeatureTable from '../FeatureTable';

afterEach(rtl.cleanup);

test('Makes sure the word Freehold exists on LP', async () => {
  const wrapper = rtl.render(<FeatureTable />);
  expect(await wrapper.queryAllByText(/free/i));
});
