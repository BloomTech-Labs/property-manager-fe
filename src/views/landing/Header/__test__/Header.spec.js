import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';

afterEach(rtl.cleanup);

test('Makes sure the word Freehold exists on LP', async () => {
  const wrapper = rtl.render(<Header />);
  expect(await wrapper.queryAllByText(/property/i));
});
