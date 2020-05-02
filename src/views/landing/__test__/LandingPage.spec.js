import React from 'react';
import * as rtl from '@testing-library/react';
import LandingPage from '../LandingPage';

afterEach(rtl.cleanup);

test('renders the entire LandingPage Component', async () => {
  const wrapper = rtl.render(<LandingPage />);
  expect(await wrapper.queryAllByText(/freehold/i));
});
