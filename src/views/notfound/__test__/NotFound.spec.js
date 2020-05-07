import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NotFound from '../NotFound';

afterEach(rtl.cleanup);

test('snapshot PropertyCard', () => {
  const { wrapper } = rtl.render(<NotFound />);
  expect(wrapper).toMatchSnapshot();
});

test('Renders', () => {
  const { wrapper } = rtl.render(<NotFound />);
  expect(wrapper).not.toBeNull();
});
