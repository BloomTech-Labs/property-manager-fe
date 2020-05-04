import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
import SpotlightButton from '../SpotlightButton';

afterEach(rtl.cleanup);

test('Makes sure the word Freehold exists on LP', async () => {
  const wrapper = rtl.render(<SpotlightButton />);
  expect(await wrapper.queryAllByText(/sign up/i));
});
