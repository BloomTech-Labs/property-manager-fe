import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
import FeatureButton from '../FeatureButtons';

afterEach(rtl.cleanup);

test('Makes sure the word Freehold exists on LP', async () => {
  const wrapper = rtl.render(<FeatureButton />);
  expect(await wrapper.queryAllByText(/buy/i));
});
