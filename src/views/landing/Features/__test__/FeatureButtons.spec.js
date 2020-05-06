import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
import FeatureButton from '../FeatureButtons';

afterEach(rtl.cleanup);

test('Makes sure the word buy exists on buttons', async () => {
  const wrapper = rtl.render(<FeatureButton />);
  expect(await wrapper.queryAllByText(/buy/i));
});

test('snapshot', () => {
  const { container } = rtl.render(<FeatureButton />);
  expect(container.firstChild).toMatchSnapshot();
});
