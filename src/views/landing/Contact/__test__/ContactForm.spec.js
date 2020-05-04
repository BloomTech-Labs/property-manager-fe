import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactForm from '../ContactForm';
import renderWithRouter from '../../../../helpers/renderWithRouter';
import ContactFormMessage from '../ContactFormMessage';

afterEach(rtl.cleanup);

test('Checks submit button event for modal', async () => {
  const { container, getByTestId } = await rtl.render(<ContactForm />);

  const appContainer = container;
  expect(await appContainer.innerHTML).toMatch('Contact Us');

  const leftClick = { button: 0 };
  rtl.fireEvent.click(getByTestId(/contactBtn/i), leftClick);
});

test('shows the modal message after submit', async () => {
  const formMessage = 'Form Submitted!';
  const { container, getByText } = await rtl.render(<ContactForm />);
  const {
    modal,
    history: { navigate }
  } = renderWithRouter(<ContactFormMessage>{formMessage}</ContactFormMessage>);

  const leftClick = { button: 0 };
  expect(await container.queryByText(formMessage)).toBeNull();
  rtl.fireEvent.click(getByText(/submit/i), leftClick);

  expect(await modal.getByText(formMessage)).toBeInTheDocument();
  await navigate('/');
});
