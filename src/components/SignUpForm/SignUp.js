/* eslint-disable react/prop-types */
import React from 'react';
import { withFormik, Field, Form } from 'formik';
import * as Yup from 'yup';

const SignUpForm = ({ errors, touched }) => {
  return (
    <div>
      <Form>
        <div>
          <Field type="text" name="firstName" placeholder="First Name" />
          {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
        </div>
        <div>
          <Field type="text" name="lastName" placeholder="Last Name" />
          {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
        </div>
        <div>
          <Field type="email" name="email" placeholder="Email" />
          {touched.email && errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <Field type="password" name="password" placeholder="Password" />
          {touched.password && errors.password && <p>{errors.password}</p>}
        </div>
        <div>
          <Field
            type="password"
            name="passwordConfirmation"
            placeholder="Confirm Password"
          />
          {touched.passwordConfirmation && errors.passwordConfirmation && (
            <p>{errors.passwordConfirmation}</p>
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </div>
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
