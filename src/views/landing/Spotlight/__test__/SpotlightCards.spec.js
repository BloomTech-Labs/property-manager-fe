import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
import SpotlightCards from '../SpotlightCards';

afterEach(rtl.cleanup);

test('Makes sure the word Stripe exists on SLCs', async () => {
  const wrapper = rtl.render(<SpotlightCards />);
  expect(await wrapper.queryAllByText(/stripe/i));
});

test('snapshot', () => {
  const { container } = rtl.render(<SpotlightCards />);
  expect(container.firstChild).toMatchSnapshot();
});
