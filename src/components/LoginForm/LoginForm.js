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
  FormHeading,
  I,
  FormFooterContainer,
  FormFooter,
  TextInput,
  InputFieldWrapper,
  Label,
  FormCard
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
    <FormCard>
      <FormHeading>Login</FormHeading>
      <Formik
        validationSchema={validationSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={values => submit(values)}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form data-testid="form-element">
            <InputFieldWrapper>
              <Label htmlFor="email">
                <I>
                  <MdEmail />
                </I>{' '}
                Email
              </Label>
              <Field
                as={TextInput}
                placeholder="Enter your email address"
                name="email"
                type="email"
              />
              <FormErrors touched={touched.email} message={errors.email} />
            </InputFieldWrapper>
            <InputFieldWrapper>
              <Label htmlFor="Password">
                <I>
                  <MdLock />
                </I>{' '}
                Password
              </Label>
              <Field
                as={TextInput}
                placeholder="Type your password"
                name="password"
                type="password"
              />
              <FormErrors
                touched={touched.password}
                message={errors.password}
              />
            </InputFieldWrapper>
            <ButtonContainer>
              <FormButton type="submit" disabled={isSubmitting}>
                Submit
              </FormButton>
            </ButtonContainer>
            <Link
              to="/iamareallyforgetfulperson"
              css={css`
                color: #2d3b4f70;
                font-size: 0.85rem;
                text-decoration: none;
                line-height: 1rem;
                font-weight: 400;
                align-self: flex-end;
                margin-top: -0.3rem;
                text-align: center;
                width: 100%;
                display: block;
              `}
            >
              Forgot your password?
            </Link>
          </Form>
        )}
      </Formik>
      <FormFooterContainer>
        <FormFooter>Don&apos;t have an account?</FormFooter>
        <Link
          to="/signup"
          css={css`
            color: #2d3b4f;
            font-size: 1.2rem;
            text-decoration: none;
            line-height: 2rem;
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
          `}
        >
          Sign Up
        </Link>
      </FormFooterContainer>
    </FormCard>
  );
}
