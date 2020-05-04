import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
import FeatureHeading from '../FeatureHeading';

afterEach(rtl.cleanup);

test('Makes sure the word Freehold exists on LP', async () => {
  const wrapper = rtl.render(<FeatureHeading />);
  expect(await wrapper.queryAllByText(/freehold/i));
});
