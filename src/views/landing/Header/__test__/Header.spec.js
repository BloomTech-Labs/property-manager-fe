import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';

afterEach(rtl.cleanup);

test('Makes sure the word property exists in Header', async () => {
  const wrapper = rtl.render(<Header />);
  expect(await wrapper.queryAllByText(/property/i));
});

test('Looks for Get Started Button and tests functionality', async () => {
  const wrapper = rtl.render(<Header />);
  const leftClick = { button: 0 };

  rtl.fireEvent.click(await wrapper.getByText('Get Started'), leftClick);
});

test('snapshot', () => {
  const { container } = rtl.render(<Header />);
  expect(container.firstChild).toMatchSnapshot();
});
