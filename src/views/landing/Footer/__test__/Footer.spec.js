import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../Footer';

afterEach(rtl.cleanup);

test('Makes sure the word Freehold exists on LP', async () => {
  const wrapper = rtl.render(<Footer />);
  expect(await wrapper.queryAllByText(/copyright freehold/i));
});
