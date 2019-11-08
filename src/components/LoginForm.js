/* eslint-disable react/prop-types */
import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import FormErrors from './FormErrors';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Must be a valid email address')
    .max(255, 'Email entered was too long')
    .required('Must enter an Email'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(40, 'Password must be shorter than 40')
    .required('Must enter a Pass')
});

export default function LoginForm({ submit }) {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{ email: '', password: '' }}
      onSubmit={values => submit(values)}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form data-testid="form-element">
          <div>
            <Field placeholder="email" name="email" type="email" />
            <FormErrors touched={touched.email} message={errors.email} />
          </div>
          <div>
            <Field placeholder="password" name="password" type="password" />
            <FormErrors touched={touched.password} message={errors.password} />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
