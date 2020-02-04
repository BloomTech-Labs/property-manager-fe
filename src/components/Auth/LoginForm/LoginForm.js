/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { Link } from '@reach/router';
import { MdEmail, MdLock } from 'react-icons/md';
import FormErrors from '../../../helpers/FormErrors';
import { I, FormFooterContainer, FormFooter } from '../../UI';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Must be a valid email address')
    .max(255, 'Email entered was too long')
    .required('Must enter an Email Address'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(40, 'Password must be shorter than 40')
    .required('Must enter a Password')
});

export default function LoginForm({ submit, toggleFlip }) {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{ email: '', password: '' }}
      onSubmit={values => submit(values)}
    >
      {({ errors, touched, isSubmitting }) => (
        <>
          <h2>Login</h2>
          <Form data-testid="form-element">
            <div className="input-wrapper">
              <label htmlFor="email">
                <I>
                  <MdEmail />
                </I>{' '}
                Email
              </label>
              <Field
                placeholder="Enter your email address"
                name="email"
                type="email"
              />
              <FormErrors touched={touched.email} message={errors.email} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="Password">
                <I>
                  <MdLock />
                </I>{' '}
                Password
              </label>
              <Field
                placeholder="Type your password"
                name="password"
                type="password"
              />
              <FormErrors
                touched={touched.password}
                message={errors.password}
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
              <Link to="/iamareallyforgetfulperson">Forgot your password?</Link>
            </div>
            <FormFooterContainer>
              <FormFooter>Don&apos;t have an account?</FormFooter>
              <button type="button" onClick={() => toggleFlip()}>
                Sign Up
              </button>
            </FormFooterContainer>
          </Form>
        </>
      )}
    </Formik>
  );
}
