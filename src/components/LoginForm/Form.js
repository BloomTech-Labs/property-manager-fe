/* eslint-disable react/prop-types */
/** @jsx jsx */
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { css, jsx } from '@emotion/core';
import FormErrors from './FormErrors';
import { Button } from '../UI';

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
    <Formik
      validationSchema={validationSchema}
      initialValues={{ email: '', password: '' }}
      onSubmit={values => submit(values)}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form data-testid="form-element">
          <div>
            <Field
              css={css`
                line-height: 2rem;
                font-size: 1.5rem;
                border: none;
                outline: none;
                border-bottom: 2px solid #2d3b4f;
                width: 300px;
                margin-bottom: 0.5rem;
              `}
              placeholder="Enter your email address"
              name="email"
              type="email"
            />
            <FormErrors touched={touched.email} message={errors.email} />
          </div>
          <div>
            <Field
              css={css`
                line-height: 2rem;
                font-size: 1.5rem;
                border: none;
                outline: none;
                border-bottom: 2px solid #2d3b4f;
                width: 300px;
                margin-bottom: 0.5rem;
              `}
              placeholder="Type your password"
              name="password"
              type="password"
            />
            <FormErrors touched={touched.password} message={errors.password} />
          </div>
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
