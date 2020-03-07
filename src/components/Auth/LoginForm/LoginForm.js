/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useCallback } from 'react';
import { navigate, Link } from '@reach/router';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { MdEmail, MdLock } from 'react-icons/md';
import FormErrors from '../../../helpers/FormErrors';
import { I, FormFooterContainer, FormFooter } from '../../UI';
import { auth, getUserInfo } from '../../../store/actions';

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

const login = auth('/auth/login');

export default function LoginForm() {
  const dispatch = useDispatch();

  const loginFn = useCallback(
    ({ email, password }) =>
      dispatch(login(email, password))
        .then(() => {
          dispatch(getUserInfo()).then(() => {
            navigate('/dashboard');
          });
        })
        // eslint-disable-next-line no-console
        .catch(err => console.error(err)),
    [dispatch]
  );

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{ email: '', password: '' }}
      onSubmit={values => loginFn(values)}
    >
      {({ errors, touched, isSubmitting, values }) => (
        <>
          <h2>Login</h2>
          <Form className="form-element" data-testid="form-element">
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
                value={values.email}
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
                value={values.password}
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
              <button
                type="button"
                className="flip"
                onClick={() => navigate('/signup')}
              >
                Sign Up
              </button>
            </FormFooterContainer>
          </Form>
        </>
      )}
    </Formik>
  );
}
