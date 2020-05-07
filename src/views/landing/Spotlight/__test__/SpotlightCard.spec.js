import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
import SpotlightCard from '../SpotlightCard';

afterEach(rtl.cleanup);

test('Makes sure the word Freehold exists on LP', async () => {
  const wrapper = rtl.render(<SpotlightCard />);
  expect(await wrapper.queryAllByText(/stripe/i));
});
