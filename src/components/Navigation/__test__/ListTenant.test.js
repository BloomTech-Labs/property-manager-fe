import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListTenant from '../SideNav/ListTenant';

afterEach(rtl.cleanup);

test('snapshot ListTenant', () => {
  const { wrapper } = rtl.render(<ListTenant />);
  expect(wrapper).toMatchSnapshot();
});

test('Renders', () => {
  const { wrapper } = rtl.render(<ListTenant />);
  expect(wrapper).not.toBeNull();
});
