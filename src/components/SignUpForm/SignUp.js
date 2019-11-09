/* eslint-disable react/prop-types */
import React from 'react';
import { withFormik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { MdAccountCircle, MdEmail, MdLock } from 'react-icons/md';
import {
  FormButton,
  ButtonContainer,
  InputFieldWrapper,
  FormHeading,
  FormCard,
  FormError,
  TextInput,
  Label,
  I
} from '../UI';

const SignUpForm = ({ errors, touched }) => {
  return (
    <FormCard style={{ height: '600px' }}>
      <FormHeading>Sign Up</FormHeading>
      <Form>
        <InputFieldWrapper>
          <Label>
            <I>
              <MdAccountCircle />
            </I>{' '}
            First Name
          </Label>
          <Field
            as={TextInput}
            type="text"
            name="firstName"
            placeholder="First Name"
          />
          {touched.firstName && errors.firstName && (
            <FormError>{errors.firstName}</FormError>
          )}
        </InputFieldWrapper>
        <InputFieldWrapper>
          <Label>
            <I>
              <MdAccountCircle />
            </I>{' '}
            Last Name
          </Label>
          <Field
            as={TextInput}
            type="text"
            name="lastName"
            placeholder="Last Name"
          />
          {touched.lastName && errors.lastName && (
            <FormError>{errors.lastName}</FormError>
          )}
        </InputFieldWrapper>
        <InputFieldWrapper>
          <Label>
            <I>
              <MdEmail />
            </I>{' '}
            Email
          </Label>
          <Field as={TextInput} type="email" name="email" placeholder="Email" />
          {touched.email && errors.email && (
            <FormError>{errors.email}</FormError>
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
            placeholder="Password"
          />
          {touched.password && errors.password && (
            <FormError>{errors.password}</FormError>
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
            placeholder="Confirm Password"
          />
          {touched.passwordConfirmation && errors.passwordConfirmation && (
            <FormError>{errors.passwordConfirmation}</FormError>
          )}
        </InputFieldWrapper>
        <ButtonContainer>
          <FormButton type="submit">Submit</FormButton>
        </ButtonContainer>
      </Form>
    </FormCard>
  );
};

const FormikSignUpForm = withFormik({
  mapPropsToValues({ firstName, lastName, email, password }) {
    return {
      firstName: firstName || '',
      lastName: lastName || '',
      email: email || '',
      password: password || '',
      passwordConfirmation: ''
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
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
  })
})(SignUpForm);

export default FormikSignUpForm;
