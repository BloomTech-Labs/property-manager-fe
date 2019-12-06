/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/** @jsx jsx */
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { jsx } from '@emotion/core';
import FormErrors from '../LoginForm/FormErrors';

const validationSchema = Yup.object().shape({
  propertyName: Yup.string()
    .max(255, 'Name entered was too long')
    .required('Must enter a Property Name'),
  propertyAddress: Yup.object({
    street: Yup.string()
      .max(255, 'Address entered was too long')
      .required('Must enter a street address'),
    street2: Yup.string().max(255, 'Address entered was too long'),
    city: Yup.string()
      .max(50, 'City entered was too long')
      .required('Must enter a city'),
    zip: Yup.string()
      .min(5, 'Must enter 5-digit zip code')
      .max(5, 'Must enter 5-digit zip code')
      .required('Must enter a 5-digit zip code'),
    state: Yup.string()
      .max(50, 'State entered was too long')
      .required('Must enter the state'),
    country: Yup.string()
      .max(255, 'Country entered was too long')
      .required('Must enter a country')
  })
});

export default function AddPropertyForm({ submit }) {
  return (
    <div className="form-card">
      <h2>Add Property</h2>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          propertyName: '',
          propertyAddress: {
            street: '',
            street2: '',
            city: '',
            zip: '',
            state: '',
            country: ''
          }
        }}
        onSubmit={values => submit(values)}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form data-testid="form-element">
            <div className="input-wrapper">
              <label htmlFor="propertyName">Property Name</label>
              <Field
                placeholder="Enter a name for your Property"
                name="propertyName"
                type="text"
              />
              <FormErrors
                touched={touched.propertyName}
                message={errors.propertyName}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="propertyAddress.street">Address Line 1</label>
              <Field
                placeholder="Street address"
                name="propertyAddress.street"
                type="text"
              />
              <FormErrors
                touched={
                  touched.propertyAddress && touched.propertyAddress.street
                }
                message={
                  errors.propertyAddress && errors.propertyAddress.street
                }
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="propertyAddress.street2">Address Line 2</label>
              <Field
                placeholder="Apartment, suite, unit, building, floor, etc."
                name="propertyAddress.street2"
                type="text"
              />
              <FormErrors
                touched={
                  touched.propertyAddress && touched.propertyAddress.street2
                }
                message={
                  errors.propertyAddress && errors.propertyAddress.street2
                }
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="propertyAddress.city">City</label>
              <Field
                placeholder="City"
                name="propertyAddress.city"
                type="text"
              />
              <FormErrors
                touched={
                  touched.propertyAddress && touched.propertyAddress.city
                }
                message={errors.propertyAddress && errors.propertyAddress.city}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="propertyAddress.zip">Zip Code</label>
              <Field
                placeholder="Enter a 5-digit Zip Code"
                name="propertyAddress.zip"
                type="number"
              />

              <FormErrors
                touched={touched.propertyAddress && touched.propertyAddress.zip}
                message={errors.propertyAddress && errors.propertyAddress.zip}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="propertyAddress.state">State</label>
              <Field
                placeholder="State"
                name="propertyAddress.state"
                type="text"
              />
              <FormErrors
                touched={
                  touched.propertyAddress && touched.propertyAddress.state
                }
                message={errors.propertyAddress && errors.propertyAddress.state}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="propertyAddress.country">Country</label>
              <Field
                placeholder="Country"
                name="propertyAddress.country"
                type="text"
              />
              <FormErrors
                touched={
                  touched.propertyAddress && touched.propertyAddress.country
                }
                message={
                  errors.propertyAddress && errors.propertyAddress.country
                }
              />
            </div>
            <div className="submit-btn-wrapper">
              <button
                className="btn btn-animated"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
