import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../Footer';

afterEach(rtl.cleanup);

test('Makes sure Footer renders with Copyright Freehold exists on LP', async () => {
  const wrapper = rtl.render(<Footer />);
  expect(await wrapper.queryAllByText(/copyright freehold/i));
});

test('Looks for Contact Us link and tests functionality', async () => {
  const wrapper = rtl.render(<Footer />);
  const leftClick = { button: 0 };

  rtl.fireEvent.click(await wrapper.getByText('Contact Us'), leftClick);
});

test('snapshot', () => {
  const { container } = rtl.render(<Footer />);
  expect(container.firstChild).toMatchSnapshot();
});
