/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/** @jsx jsx */
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { jsx } from '@emotion/core';
import FormErrors from '../../helpers/FormErrors';
import PropertyLoading from './PropertyLoading';
import propertyValues from './PropertyFormValues';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .max(30, 'Name entered must be 30 characters or less')
    .required('Must enter a name for the property'),
  rent: Yup.number().required('Must enter rent amount'),
  street_address: Yup.string()
    .max(255, 'Address entered was too long')
    .required('Must enter a street address'),
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
  occupied: Yup.number().required('Property Status is required!')
});

export default function PropertyForm({
  submit,
  initialValues,
  loading,
  isSubmitting
}) {
  if (loading || isSubmitting) {
    return <PropertyLoading />;
  }

  return (
    <div className="form-card">
      <h2>{initialValues.name !== '' ? 'Edit Property' : 'Add Property'}</h2>
      <Formik
        enableReinitialize
        validationSchema={validationSchema}
        initialValues={{
          name: initialValues.name,
          rent: initialValues.rent,
          street_address: initialValues.street_address,
          city: initialValues.city,
          state: initialValues.state,
          zip: initialValues.zip,
          occupied: initialValues.occupied
        }}
        onSubmit={values => {
          submit(values);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form data-testid="form-element">
            {console.log(errors, touched)}
            {propertyValues.map(
              ({ className, htmlFor, html, placeholder, name, type }) => (
                <div className={className}>
                  <label htmlFor={htmlFor}>{html}</label>
                  <Field placeholder={placeholder} name={name} type={type} />
                  <FormErrors touched={touched.name} message={errors.name} />
                </div>
              )
            )}
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
