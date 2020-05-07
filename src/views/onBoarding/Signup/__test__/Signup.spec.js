import React from 'react';
import * as rtl from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../../store';
import SignUpForm from '../Signup';

afterEach(rtl.cleanup);

describe('SignUp Form tests...', () => {
  it('renders the form...', () => {
    const { getByTestId } = rtl.render(
      <Provider store={store}>
        <SignUpForm />
      </Provider>
    );

    const Form = getByTestId('SignUpForm');

    expect(Form).toBeTruthy();
  });

  it('snapshot', () => {
    const { container } = rtl.render(
      <Provider store={store}>
        <SignUpForm />
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('submits a user with creds', async () => {
    const handleSubmit = jest.fn();

    const fakeUser = {
      email: 'test@test.com',
      password: 'password1',
      passConfirmation: 'password1',
      userType: 'Tenant'
    };

    const { getByPlaceholderText, getByTestId } = await rtl.render(
      <Provider store={store}>
        <SignUpForm onSubmit={handleSubmit} />
      </Provider>
    );

    const email = getByPlaceholderText('Enter your email address');
    const password = getByPlaceholderText('Enter your password');
    const passConfirmation = getByPlaceholderText('Re-enter your password');
    const userType = getByTestId('userType');
    const submitBtn = getByTestId('submit-btn');

    email.value = fakeUser.email;
    password.value = fakeUser.password;
    passConfirmation.value = fakeUser.passConfirmation;
    userType.value = fakeUser.userType;
    submitBtn.click();

    expect(handleSubmit).toHaveBeenCalledTimes(0);
  });
});
