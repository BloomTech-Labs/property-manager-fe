import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PropertyCard from '../PropertyCard';

afterEach(rtl.cleanup);

test('snapshot PropertyCard', () => {
  const { wrapper } = rtl.render(<PropertyCard />);
  expect(wrapper).toMatchSnapshot();
});

test('Renders', () => {
  const { wrapper } = rtl.render(<PropertyCard />);
  expect(wrapper).not.toBeNull();
});
