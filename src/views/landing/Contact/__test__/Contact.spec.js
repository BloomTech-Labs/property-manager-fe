import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '../Contact';

afterEach(rtl.cleanup);

test('Checks the submit button functionality', async () => {
  const wrapper = rtl.render(<Contact />);
  expect(await wrapper.queryAllByText(/freehold/i));
});
