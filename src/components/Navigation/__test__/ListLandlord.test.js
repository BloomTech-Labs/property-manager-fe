import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListLandlord from '../SideNav/ListLandlord';

afterEach(rtl.cleanup);

test('snapshot ListLandlord', () => {
  const { wrapper } = rtl.render(<ListLandlord />);
  expect(wrapper).toMatchSnapshot();
});

test('Renders', () => {
  const { wrapper } = rtl.render(<ListLandlord />);
  expect(wrapper).not.toBeNull();
});
