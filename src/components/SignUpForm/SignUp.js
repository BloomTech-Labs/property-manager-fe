/* eslint-disable react/prop-types */
import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { navigate } from '@reach/router';
import { MdEmail, MdLock, MdError } from 'react-icons/md';
import {
  FormButton,
  ButtonContainer,
  InputFieldWrapper,
  FormHeading,
  FormCardAlt,
  FormError,
  TextInput,
  Label,
  I
} from '../UI';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email not valid')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be 8 characters or longer')
    .required('Password is required'),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match'
  )
});

const SignUpForm = ({ submit }) => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        passwordConfirmation: ''
      }}
      validationSchema={validationSchema}
      onSubmit={values => submit(values)}
    >
      {({ touched, errors }) => (
        <FormCardAlt>
          <FormHeading>Sign Up</FormHeading>
          <Form data-testid="form-element">
            <InputFieldWrapper>
              <Label>
                <I>
                  <MdEmail />
                </I>{' '}
                Email
              </Label>
              <Field
                as={TextInput}
                type="email"
                name="email"
                placeholder="Enter your email address"
              />
              {touched.email && errors.email && (
                <FormError>
                  <I>
                    <MdError />
                  </I>{' '}
                  {errors.email}
                </FormError>
              )}
            </InputFieldWrapper>
            <InputFieldWrapper>
              <Label>
                <I>
                  <MdLock />
                </I>{' '}
                Password
              </Label>
              <Field
                as={TextInput}
                type="password"
                name="password"
                placeholder="Enter your password"
              />
              {touched.password && errors.password && (
                <FormError>
                  <I>
                    <MdError />
                  </I>{' '}
                  {errors.password}
                </FormError>
              )}
            </InputFieldWrapper>
            <InputFieldWrapper>
              <Label>
                <I>
                  <MdLock />
                </I>{' '}
                Confirm Password
              </Label>
              <Field
                as={TextInput}
                type="password"
                name="passwordConfirmation"
                placeholder="Re-enter your password"
              />
              {touched.passwordConfirmation && errors.passwordConfirmation && (
                <FormError>
                  <I>
                    <MdError />
                  </I>{' '}
                  {errors.passwordConfirmation}
                </FormError>
              )}
            </InputFieldWrapper>
            <ButtonContainer>
              <FormButton type="submit">Submit</FormButton>
            </ButtonContainer>
          </Form>
        </FormCardAlt>
      )}
    </Formik>
  );
};

export default SignUpForm;
