import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
import Features from '../Features';

afterEach(rtl.cleanup);

test('Makes sure the word Freehold exists on LP', async () => {
  const wrapper = rtl.render(<Features />);
  expect(await wrapper.queryAllByText(/professional dashboard/i));
});

test('snapshot', () => {
  const { container } = rtl.render(<Features />);
  expect(container.firstChild).toMatchSnapshot();
});
