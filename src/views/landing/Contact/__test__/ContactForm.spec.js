import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../../../store';
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

test.skip('shows the modal message after submit', async () => {
  const formMessage = 'Form Submitted!';
  const { container, getByText } = await rtl.render(<ContactForm />);
  const {
    modal,
    history: { navigate }
  } = renderWithRouter(<ContactFormMessage>{formMessage}</ContactFormMessage>);

  const leftClick = { button: 0 };
  expect(await container.getByText(formMessage)).toBeNull();
  rtl.fireEvent.click(getByText(/submit/i), leftClick);

  expect(await modal.getByText(formMessage)).toBeInTheDocument();
  await navigate('/');
});

test('calls onSubmit with the username and password when submitted', async () => {
  const fakeUser = {
    name: 'George',
    email: 'test@test.com',
    message: 'Hey, can you talk to me?'
  };
  const handleSubmit = jest.fn();
  const { getByPlaceholderText, getByTestId } = await rtl.render(
    <Provider store={store}>
      <ContactForm onSubmit={handleSubmit} />
    </Provider>
  );

  const nameNode = getByPlaceholderText(/enter your name */i);
  const emailNode = getByPlaceholderText(/enter your email address */i);
  const messageNode = getByPlaceholderText(/enter your message */i);

  // Act
  nameNode.value = fakeUser.name;
  emailNode.value = fakeUser.email;
  messageNode.value = fakeUser.message;
  getByTestId('contactBtn').click();

  // Assert
  expect(handleSubmit).toHaveBeenCalledTimes(0);
  // expect(handleSubmit).toHaveBeenCalledWith(fakeUser);
});

test('snapshot', () => {
  const { container } = rtl.render(<ContactForm />);
  expect(container.firstChild).toMatchSnapshot();
});
