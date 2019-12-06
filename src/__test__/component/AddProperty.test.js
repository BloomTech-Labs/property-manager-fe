import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import AddPropertyForm from '../../components/AddPropertyForm/AddPropertyForm';

test('should submit the add property form', async () => {
  // Arrange

  // Set up a fake handle submit function to replace the real handle submit function
  const handleSubmit = jest.fn();

  //  Set up a test user object which will contain fields matching form to be tested
  const testProperty = {
    propertyName: 'Cool Place',
    propertyAddress: {
      street: '123 Easy Street',
      street2: 'ww',
      city: 'Prop Town',
      zip: 12345,
      state: 'Dakiowa',
      country: 'USA'
    }
  };

  // Get your selectors and render the component you wish to test, pass in any fake functions or props
  const { getByPlaceholderText, getByTestId } = render(
    <AddPropertyForm submit={handleSubmit} />
  );

  // Use your selectors to select the field nodes needed to fill out the form
  const nameNode = getByPlaceholderText('Enter a name for your Property');
  const address1Node = getByPlaceholderText('Street address');
  const address2Node = getByPlaceholderText(
    'Apartment, suite, unit, building, floor, etc.'
  );
  const cityNode = getByPlaceholderText('City');
  const zipNode = getByPlaceholderText('Enter a 5-digit Zip Code');
  const stateNode = getByPlaceholderText('State');
  const countryNode = getByPlaceholderText('Country');
  const formNode = getByTestId('form-element');

  // Act

  // Set the value of these nodes to the values from your object
  fireEvent.change(nameNode, { target: { value: testProperty.propertyName } });
  fireEvent.change(address1Node, {
    target: { value: testProperty.propertyAddress.street }
  });
  fireEvent.change(address2Node, {
    target: { value: testProperty.propertyAddress.street2 }
  });
  fireEvent.change(cityNode, {
    target: { value: testProperty.propertyAddress.city }
  });
  fireEvent.change(zipNode, {
    target: { value: testProperty.propertyAddress.zip }
  });
  fireEvent.change(stateNode, {
    target: { value: testProperty.propertyAddress.state }
  });
  fireEvent.change(countryNode, {
    target: { value: testProperty.propertyAddress.country }
  });
  // Fire off the event by clicking on the submit button
  fireEvent.submit(formNode);

  // Assert
  await wait(() => {
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith(testProperty);
  });
});
