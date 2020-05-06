import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
import SpotlightHeading from '../SpotlightCard';

afterEach(rtl.cleanup);

test('Looking for manage your properties on Heading', async () => {
  const wrapper = rtl.render(<SpotlightHeading />);
  expect(await wrapper.queryAllByText(/manage your properties/i));
});

test('snapshot', () => {
  const { container } = rtl.render(<SpotlightHeading />);
  expect(container.firstChild).toMatchSnapshot();
});
