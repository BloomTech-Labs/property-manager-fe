import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import AddPropertyForm from '../../components/Properties/PropertyForm';

jest.mock('@material-ui/core/Select', () => () => {
  return (
    <select data-testid="select" defaultValue="vacant" name="status">
      <option value="vacant">Vacant</option>
      <option value="occupied">Occupied</option>
    </select>
  );
});

test('should submit the property form', async () => {
  // Arrange

  // Set up a fake handle submit function to replace the real handle submit function
  const handleSubmit = jest.fn();

  //  Set up a test user object which will contain fields matching form to be tested
  const testProperty = {
    name: 'Test Property 1',
    street: '123 Test St',
    city: 'Testopolis',
    state: 'Test York',
    zip: '12345',
    status: 'occupied'
  };

  // Get your selectors and render the component you wish to test, pass in any fake functions or props
  const { getByPlaceholderText, getByTestId } = render(
    <AddPropertyForm submit={handleSubmit} />
  );

  // Use your selectors to select the field nodes needed to fill out the form
  const nameNode = getByPlaceholderText('Enter a name for your Property');
  const streetNode = getByPlaceholderText('Street address');
  const cityNode = getByPlaceholderText('City');
  const stateNode = getByPlaceholderText('State');
  const zipNode = getByPlaceholderText('Enter a 5-digit Zip Code');
  const statusNode = getByTestId('select');
  const formNode = getByTestId('form-element');
  // Act

  // Set the value of these nodes to the values from your object
  fireEvent.change(nameNode, { target: { value: testProperty.name } });
  fireEvent.change(streetNode, {
    target: { value: testProperty.street }
  });
  fireEvent.change(cityNode, {
    target: { value: testProperty.city }
  });
  fireEvent.change(zipNode, {
    target: { value: testProperty.zip }
  });
  fireEvent.change(stateNode, {
    target: { value: testProperty.state }
  });
  fireEvent.change(statusNode, {
    target: { value: testProperty.status }
  });

  // Fire off the event by clicking on the submit button
  fireEvent.submit(formNode);

  // Assert
  await wait(() => {
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith(testProperty);
  });
});
