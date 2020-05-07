/* eslint-disable no-undef */
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
// import { Provider } from 'react-redux';
// import store from '../../../store';
import WorkOrderForm from '../WorkOrderForm';

afterEach(rtl.cleanup);

test('Checks submit button event for modal', async () => {
  const { container, getByTestId } = await rtl.render(<WorkOrderForm />);

  const appContainer = container;
  expect(await appContainer.innerHTML).toMatch(/work order/i);
  rtl.fireEvent.submit(getByTestId(/form-element/i));
});

// test('calls onSubmit with the fakeUser contact info when submitted', async () => {
//   const fakeUser = {
//     firstName: 'George',
//     lastName: 'Stanza',
//     phone: '123-456-7890'
//   };
//   const handleSubmit = jest.fn();
//   const { getByPlaceholderText, getByTestId } = await rtl.render(
//     <Provider store={store}>
//       <WorkOrderForm onSubmit={handleSubmit} />
//     </Provider>
//   );

//   const nameNode = getByPlaceholderText(/Update your first name */i);
//   const emailNode = getByPlaceholderText(/Update your last name */i);
//   const messageNode = getByPlaceholderText(/Update your phone number */i);
//   const formNode = getByTestId('form-element');

//   // Act
//   rtl.fireEvent.change(nameNode, { target: { value: fakeUser.firstName } });
//   rtl.fireEvent.change(emailNode, { target: { value: fakeUser.lastName } });
//   rtl.fireEvent.change(messageNode, { target: { value: fakeUser.phone } });
//   await rtl.fireEvent.submit(formNode);

//   // Assert
//   await rtl.wait(() => {
//     expect(handleSubmit).toHaveBeenCalledTimes(0);
//   });
// });

test('snapshot', () => {
  const { container } = rtl.render(<WorkOrderForm />);
  expect(container.firstChild).toMatchSnapshot();
});
