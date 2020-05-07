/* eslint-disable no-undef */
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../../store';
import WorkOrderEditForm from '../WorkOrderEditForm';

afterEach(rtl.cleanup);

test('Checks submit button event for modal', async () => {
  const { container, getByTestId } = await rtl.render(
    <Provider store={store}>
      <WorkOrderEditForm />
    </Provider>
  );

  const appContainer = container;
  expect(await appContainer.innerHTML).toMatch(/work order/i);
  rtl.fireEvent.submit(getByTestId(/wo-form/i));
});

test.skip('calls onSubmit with fakeData when submitted', async () => {
  const fakeData = {
    name: 'Durling Commons',
    unit_id: '4',
    description: 'Water issue',
    type: 'Plumbing',
    status: 'In Progress',
    comment: 'This is a test'
  };
  const handleSubmit = jest.fn();
  const { getByLabelText, getByTestId } = await rtl.render(
    <Provider store={store}>
      <WorkOrderEditForm onSubmit={handleSubmit} />
    </Provider>
  );

  const nameNode = getByLabelText(/name/i);
  const unitNode = getByLabelText(/property/i);
  const desNode = getByLabelText(/description/i);
  const typeNode = getByLabelText(/order type/i);
  const statusNode = getByLabelText(/status update/i);
  const commentNode = getByLabelText(/additional comments/i);
  const formNode = getByTestId('wo-form');

  // Act
  rtl.fireEvent.change(nameNode, { target: { value: fakeData.name } });
  rtl.fireEvent.change(unitNode, { target: { value: fakeData.unit_id } });
  rtl.fireEvent.change(desNode, { target: { value: fakeData.description } });
  rtl.fireEvent.change(typeNode, { target: { value: fakeData.type } });
  rtl.fireEvent.change(startNode, { target: { value: fakeData.start_date } });
  rtl.fireEvent.change(endNode, { target: { value: fakeData.end_date } });
  rtl.fireEvent.change(statusNode, { target: { value: fakeData.status } });
  rtl.fireEvent.change(userNode, { target: { value: fakeData.user_id } });
  rtl.fireEvent.change(commentNode, { target: { value: fakeData.comment } });
  rtl.fireEvent.change(houseNode, { target: { value: fakeData.in_house } });
  await rtl.fireEvent.submit(formNode);

  // Assert
  await rtl.wait(() => {
    expect(handleSubmit).toHaveBeenCalledTimes(0);
  });
});

test('snapshot', () => {
  const { container } = rtl.render(
    <Provider store={store}>
      <WorkOrderEditForm />
    </Provider>
  );
  expect(container.firstChild).toMatchSnapshot();
});
