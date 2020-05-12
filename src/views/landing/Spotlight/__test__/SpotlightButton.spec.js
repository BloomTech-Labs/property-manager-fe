import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
import SpotlightButton from '../SpotlightButton';
import renderWithRouter from '../../../../helpers/renderWithRouter';

afterEach(rtl.cleanup);

test('Looks for a sign up text on the Button', async () => {
  const wrapper = rtl.render(<SpotlightButton />);
  expect(await wrapper.queryAllByText(/sign up/i));
});

test('Looks for a sign up text on the Button', async () => {
  const {
    container,
    getByText,
    history: { navigate }
  } = renderWithRouter(<SpotlightButton />);

  const leftClick = { button: 0 };
  rtl.fireEvent.click(getByText(/sign up/i), leftClick);
  await navigate('/signup');
  expect(await container.innerHTML).toMatch(/sign up/i);
});

test('snapshot', () => {
  const { container } = rtl.render(<SpotlightButton />);
  expect(container.firstChild).toMatchSnapshot();
});
