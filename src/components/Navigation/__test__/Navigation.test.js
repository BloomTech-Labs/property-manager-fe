import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navigation from '../navigation';

afterEach(rtl.cleanup);

test('snapshot Navigation', () => {
  const { wrapper } = rtl.render(<Navigation />);
  expect(wrapper).toMatchSnapshot();
});

test('Renders', () => {
  const { wrapper } = rtl.render(<Navigation />);
  expect(wrapper).not.toBeNull();
});

test('Shows Freehold logo', () => {
  const { getByTestId } = rtl.render(<Navigation />);

  const logo = getByTestId('nav-logo');

  expect(logo).toBeInDocument();
  expect(logo).toHaveProperty('props.src', '../../assets/img/logo.png');
});
