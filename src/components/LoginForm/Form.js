/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/** @jsx jsx */
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { css, jsx } from '@emotion/core';
import { MdEmail, MdLock } from 'react-icons/md';
import { Link } from '@reach/router';
import FormErrors from './FormErrors';
import {
  FormButton,
  ButtonContainer,
  FieldContainer,
  FormHeading,
  FormLabel,
  I,
  FormFooterContainer,
  FormFooter
} from '../UI';

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

export default function LoginForm({ submit }) {
  return (
    <div>
      <FormHeading>Login</FormHeading>
      <Formik
        validationSchema={validationSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={values => submit(values)}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form data-testid="form-element">
            <FieldContainer>
              <FormLabel htmlFor="email">
                <I>
                  <MdEmail />
                </I>{' '}
                Email
              </FormLabel>
              <Field
                css={css`
                  line-height: 2rem;
                  font-size: 1.5rem;
                  border: none;
                  outline: none;
                  border-bottom: 2px solid #2d3b4f;
                  width: 100%;
                  font-weight: 700;
                  font-family: 'Roboto', sans-serif;
                  -webkit-text-fill-color: none;
                  margin-bottom: 0.5rem;
                  ::placeholder {
                    color: #66707f;
                  }
                `}
                placeholder="Enter your email address"
                name="email"
                type="email"
              />
              <FormErrors touched={touched.email} message={errors.email} />
            </FieldContainer>
            <FieldContainer>
              <FormLabel htmlFor="Password">
                <I>
                  <MdLock />
                </I>{' '}
                Password
              </FormLabel>
              <Field
                css={css`
                  line-height: 2rem;
                  font-size: 1.5rem;
                  border: none;
                  outline: none;
                  border-bottom: 2px solid #2d3b4f;
                  width: 100%;
                  font-family: 'Roboto', sans-serif;
                  margin-bottom: 0.5rem;
                  ::placeholder {
                    color: #66707f;
                  }
                `}
                placeholder="Type your password"
                name="password"
                type="password"
              />
              <Link
                to="/iamareallyforgetfulperson"
                css={css`
                  color: #2d3b4f70;
                  font-size: 0.75rem;
                  text-decoration: none;
                  line-height: 1rem;
                  font-family: 'Roboto', sans-serif;
                  font-weight: bold;
                  align-self: flex-end;
                  margin-top: -0.3rem;
                `}
              >
                Forgot your password?
              </Link>
              <FormErrors
                touched={touched.password}
                message={errors.password}
              />
            </FieldContainer>
            <ButtonContainer>
              <FormButton type="submit" disabled={isSubmitting}>
                Submit
              </FormButton>
            </ButtonContainer>
          </Form>
        )}
      </Formik>
      <FormFooterContainer>
        <FormFooter>Don&apos;t have an account?</FormFooter>
        <Link
          to="/signup"
          css={css`
            color: #2d3b4f;
            font-size: 1.5rem;
            text-decoration: none;
            line-height: 2rem;
            font-family: 'Roboto', sans-serif;
            font-weight: bold;
          `}
        >
          Sign Up
        </Link>
      </FormFooterContainer>
    </div>
  );
}
