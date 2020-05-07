import React from 'react';
import * as rtl from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../../store';
import Login from '../Login';

afterEach(rtl.cleanup);

describe('SignUp Form tests...', () => {
  it('renders the form...', () => {
    const { getByTestId } = rtl.render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const Form = getByTestId('LoginForm');

    expect(Form).toBeTruthy();
  });

  it('snapshot', () => {
    const { container } = rtl.render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('login a user with creds', async () => {
    const handleSubmit = jest.fn();

    const fakeUser = {
      email: 'test@test.com',
      password: 'password1'
    };

    const { getByPlaceholderText, getByTestId } = await rtl.render(
      <Provider store={store}>
        <Login onSubmit={handleSubmit} />
      </Provider>
    );

    const email = getByPlaceholderText('Enter your email address');
    const password = getByPlaceholderText('Type your password');
    const submitBtn = getByTestId('submit-btn');

    email.value = fakeUser.email;
    password.value = fakeUser.password;
    submitBtn.click();

    expect(handleSubmit).toHaveBeenCalledTimes(0);
  });
});
