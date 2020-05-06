import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
import Spotlight from '../Spotlight';

afterEach(rtl.cleanup);

test('Makes sure the word manage exists on SL', async () => {
  const wrapper = rtl.render(<Spotlight />);
  expect(await wrapper.queryAllByText(/manage/i));
});

test('snapshot', () => {
  const { container } = rtl.render(<Spotlight />);
  expect(container.firstChild).toMatchSnapshot();
});
