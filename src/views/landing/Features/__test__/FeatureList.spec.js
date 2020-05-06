import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
import FeatureList from '../FeatureList';

afterEach(rtl.cleanup);

test('Checking for the word emailing service', async () => {
  const wrapper = rtl.render(<FeatureList />);
  expect(await wrapper.queryAllByText(/emailing service/i));
});
