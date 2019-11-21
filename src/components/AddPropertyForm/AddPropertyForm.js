/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/** @jsx jsx */
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { jsx } from '@emotion/core';
import FormErrors from '../LoginForm/FormErrors';
import {
  FormButton,
  ButtonContainer,
  FormHeading,
  TextInput,
  InputFieldWrapper,
  Label,
  FormCard
} from '../UI';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .max(255, 'Name entered was too long')
    .required('Must enter a Property Name'),
  address: Yup.object({
    address1: Yup.string()
      .max(255, 'Address entered was too long')
      .required('Must enter a street address'),
    address2: Yup.string().max(255, 'Address entered was too long'),
    city: Yup.string()
      .max(50, 'City entered was too long')
      .required('Must enter a city'),
    zip: Yup.number()
      .min(5, 'Must enter 5-digit zip code')
      .max(5, 'Must enter 5-digit zip code')
      .required('Must enter a 5-digit zip code'),
    state: Yup.string()
      .max(50, 'State entered was too long')
      .required('Must enter the state')
  }).required('Must enter an address')
});

export default function AddPropertyForm({ submit }) {
  return (
    <FormCard>
      <FormHeading>Add Property</FormHeading>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          name: '',
          address: { address1: '', address2: '', city: '', zip: '', state: '' }
        }}
        onSubmit={values => submit(values)}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form data-testid="form-element">
            <InputFieldWrapper>
              <Label htmlFor="name">Property Name</Label>
              <Field
                as={TextInput}
                placeholder="Enter a name for your Property"
                name="name"
                type="text"
              />
              <FormErrors touched={touched.name} message={errors.name} />
            </InputFieldWrapper>
            <InputFieldWrapper>
              <Label htmlForm="address1">Address Line 1</Label>
              <Field
                as={TextInput}
                placeholder="Street address"
                name="address1"
                type="text"
              />
              <FormErrors
                touched={touched.address1}
                message={errors.address1}
              />
            </InputFieldWrapper>
            <InputFieldWrapper>
              <Label htmlForm="address2">Address Line 2</Label>
              <Field
                as={TextInput}
                placeholder="Apartment, suite, unit, building, floor, etc."
                name="address2"
                type="text"
              />
              <FormErrors
                touched={touched.address2}
                message={errors.address2}
              />
            </InputFieldWrapper>
            <InputFieldWrapper>
              <Label htmlForm="city">City</Label>
              <Field
                as={TextInput}
                placeholder="Apartment, suite, unit, building, floor, etc."
                name="city"
                type="text"
              />
              <FormErrors touched={touched.city} message={errors.city} />
            </InputFieldWrapper>
            <InputFieldWrapper>
              <Label htmlForm="zip">Zip Code</Label>
              <Field
                as={TextInput}
                placeholder="Enter a 5-digit Zip Code"
                name="zip"
                type="number"
              />
              <FormErrors touched={touched.zip} message={errors.zip} />
            </InputFieldWrapper>
            <InputFieldWrapper>
              <Label htmlForm="state">State</Label>
              <Field
                as={TextInput}
                placeholder="State"
                name="state"
                type="text"
              />
              <FormErrors touched={touched.state} message={errors.state} />
            </InputFieldWrapper>
            <ButtonContainer>
              <FormButton type="submit" disabled={isSubmitting}>
                Submit
              </FormButton>
            </ButtonContainer>
          </Form>
        )}
      </Formik>
    </FormCard>
  );
}
