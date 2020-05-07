import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import WorkOrderForm from '../../components/WorkOrderForm/WorkOrderForm';

test.skip('should submit the maintenance request', async () => {
  // Set up a fake handle submit function to replace the real handle submit function
  const handleSubmit = jest.fn();

  //  Set up a test object which will contain fields matching form to be tested
  const testWorkOrder = {
    worderType: 'Plumbing',
    otherorder: 'other',
    location: 'Main Floor',
    otherlocation: 'other',
    occurrence: 'Yes',
    maintenanceDetail: 'the coold tempreature killing me',
    preferredTime: '8am-12pm'
  };

  // Get your selectors and render the component you wish to test, pass in any fake functions or props
  const { getByDisplayValue, getByPlaceholderText, getByTestId } = render(
    <WorkOrderForm submit={handleSubmit} />
  );

  // Use your selectors to select the field nodes needed to fill out the form
  const worderTypeNode = getByDisplayValue('Plumbing');
  const otherorderNode = getByPlaceholderText('other order type');
  const locationNode = getByDisplayValue('Main Floor');
  const otherlocationNode = getByPlaceholderText('other location');
  const occurrenceNode = getByDisplayValue('Yes');
  const maintenanceDetailNode = getByPlaceholderText('detail info');
  const preferredTimeNode = getByDisplayValue('8am-12pm');
  const formNode = getByTestId('form-element');

  // Set the value of these nodes to the values from your object
  fireEvent.change(worderTypeNode, {
    target: { value: testWorkOrder.worderType }
  });
  fireEvent.change(otherorderNode, {
    target: { value: testWorkOrder.otherorder }
  });
  fireEvent.change(locationNode, {
    target: { value: testWorkOrder.location }
  });
  fireEvent.change(otherlocationNode, {
    target: { value: testWorkOrder.otherlocation }
  });
  fireEvent.change(occurrenceNode, {
    target: { value: testWorkOrder.occurrence }
  });
  fireEvent.change(maintenanceDetailNode, {
    target: { value: testWorkOrder.maintenanceDetail }
  });
  fireEvent.change(preferredTimeNode, {
    target: { value: testWorkOrder.preferredTime }
  });

  // Fire off the event by clicking on the submit button
  fireEvent.submit(formNode);

  // Assert
  await wait(() => {
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith(testWorkOrder);
  });
});
