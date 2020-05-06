import React from 'react';
import * as rtl from '@testing-library/react';
import LandingPage from '../LandingPage';
import renderWithRouter from '../../../helpers/renderWithRouter';

afterEach(rtl.cleanup);

test('Renders Landing Page and checks button navigation', async () => {
  const {
    container,
    getByText,
    history: { navigate }
  } = renderWithRouter(<LandingPage />);
  const landingContainer = container;
  expect(await landingContainer.innerHTML).toMatch(/freehold/i);

  const leftClick = { button: 0 };
  rtl.fireEvent.click(getByText(/get started/i), leftClick);
  await navigate('/signup');
  expect(await container.innerHTML).toMatch(/sign up/i);
});

test('Makes sure the word Freehold exists on LP', async () => {
  const wrapper = rtl.render(<LandingPage />);
  expect(await wrapper.queryAllByText(/freehold/i));
});

test('snapshot', () => {
  const { container } = rtl.render(<LandingPage />);
  expect(container.firstChild).toMatchSnapshot();
});
