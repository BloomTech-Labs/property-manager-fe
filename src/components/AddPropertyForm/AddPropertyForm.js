/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/** @jsx jsx */
import { Formik, Field, Form, getIn } from 'formik';
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
    zip: Yup.string()
      .min(5, 'Must enter 5-digit zip code')
      .max(5, 'Must enter 5-digit zip code')
      .required('Must enter a 5-digit zip code'),
    state: Yup.string()
      .max(50, 'State entered was too long')
      .required('Must enter the state')
  })
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
            </InputFieldWrapper>
            <InputFieldWrapper>
              <Label htmlFor="address.address1">Address Line 1</Label>
              <Field
                as={TextInput}
                placeholder="Street address"
                name="address.address1"
                type="text"
              />
              <FormErrors
                touched={touched.address && touched.address.address1}
                message={errors.address && errors.address.address1}
              />
            </InputFieldWrapper>
            <InputFieldWrapper>
              <Label htmlFor="address.address2">Address Line 2</Label>
              <Field
                as={TextInput}
                placeholder="Apartment, suite, unit, building, floor, etc."
                name="address.address2"
                type="text"
              />
              <FormErrors
                touched={touched.address && touched.address.address2}
                message={errors.address && errors.address.address2}
              />
            </InputFieldWrapper>
            <InputFieldWrapper>
              <Label htmlFor="address.city">City</Label>
              <Field
                as={TextInput}
                placeholder="City"
                name="address.city"
                type="text"
              />
              <FormErrors
                touched={touched.address && touched.address.city}
                message={errors.address && errors.address.city}
              />
            </InputFieldWrapper>
            <InputFieldWrapper>
              <Label htmlFor="address.zip">Zip Code</Label>
              <Field
                as={TextInput}
                placeholder="Enter a 5-digit Zip Code"
                name="address.zip"
                type="number"
              />

              <FormErrors
                touched={touched.address && touched.address.zip}
                message={errors.address && errors.address.zip}
              />
            </InputFieldWrapper>
            <InputFieldWrapper>
              <Label htmlFor="address.state">State</Label>
              <Field
                as={TextInput}
                placeholder="State"
                name="address.state"
                type="text"
              />
              <FormErrors
                touched={touched.address && touched.address.state}
                message={errors.address && errors.address.state}
              />
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
