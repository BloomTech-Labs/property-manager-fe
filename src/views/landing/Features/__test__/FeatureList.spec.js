import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
import FeatureList from '../FeatureList';

afterEach(rtl.cleanup);

test('Makes sure the word Freehold exists on LP', async () => {
  const wrapper = rtl.render(<FeatureList />);
  expect(await wrapper.queryAllByText(/emailing service/i));
});
