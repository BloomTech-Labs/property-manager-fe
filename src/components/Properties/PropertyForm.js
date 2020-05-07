/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/** @jsx jsx */
import { Formik, Field, Form } from 'formik';
import { jsx } from '@emotion/core';
import FormErrors from '../../helpers/FormErrors';
import Loading from '../UI/Loading';
import propertyValues from './PropertyFormValues';
import { propertyValidation } from './PropertyValidation';
import SubmitButton from '../Buttons/SubmitButton';

export default function PropertyForm({
  submit,
  initialValues,
  loading,
  isSubmitting
}) {
  if (loading || isSubmitting) {
    return <Loading />;
  }

  return (
    <div className="form-card">
      <h2>{initialValues.name !== '' ? 'Edit Property' : 'Add Property'}</h2>
      <Formik
        enableReinitialize
        validationSchema={propertyValidation}
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
        {({ errors, isSubmitting, touched }) => (
          <Form data-testid="form-element">
            {propertyValues.map(
              ({ className, htmlFor, html, placeholder, name, type }) => (
                <div className={className} key={name}>
                  <label htmlFor={htmlFor}>{html}</label>
                  <Field placeholder={placeholder} name={name} type={type} />
                  <FormErrors
                    touched={touched && touched[name]}
                    message={errors && errors[name]}
                  />
                </div>
              )
            )}
            <SubmitButton disabled={isSubmitting} />
          </Form>
        )}
      </Formik>
    </div>
  );
}
