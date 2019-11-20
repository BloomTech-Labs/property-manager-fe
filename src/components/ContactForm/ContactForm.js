/* eslint-disable react/prop-types */
import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { navigate } from '@reach/router';
import { MdEmail, MdMessage, MdPerson } from 'react-icons/md';
import FormErrors from '../LoginForm/FormErrors';
import {
  FormButton,
  ButtonContainer,
  FormHeading,
  I,
  TextInput,
  InputFieldWrapper,
  Label,
  TextAreaInput,
  FormCard
} from '../UI';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2)
    .max(100)
    .required('Must enter a Name'),
  email: Yup.string()
    .email('Must be a valid email address')
    .max(255, 'Email entered was too long')
    .required('Must enter an Email Address'),
  message: Yup.string()
    .min(8, 'Message must be at least 8 characters')
    .max(255, 'Message is too long')
    .required('Must enter a Message')
});

export default function ContactForm() {
  const encode = data => {
    return Object.keys(data)
      .map(
        // eslint-disable-next-line prefer-template
        key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  return (
    <FormCard>
      <FormHeading>Contact Us</FormHeading>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          name: '',
          email: '',
          message: '',
          'bot-field': '',
          'form-name': 'contact'
        }}
        onSubmit={values => {
          fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
              'form-name': 'contact',
              ...values
            })
          }).then(() => navigate('/thanks'));
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form data-testid="form-element">
            <Field type="hidden" name="bot-field" />
            <Field type="hidden" name="contact" />
            <InputFieldWrapper>
              <Label htmlFor="name">
                <I>
                  <MdPerson />
                </I>{' '}
                Name
              </Label>
              <Field
                as={TextInput}
                placeholder="Enter your name"
                name="name"
                type="text"
              />
              <FormErrors touched={touched.name} message={errors.name} />
            </InputFieldWrapper>
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
              <Label htmlFor="message">
                <I>
                  <MdMessage />
                </I>{' '}
                Message
              </Label>
              <Field
                as={TextAreaInput}
                placeholder="Enter your message"
                name="message"
                type="textarea"
              />
              <FormErrors touched={touched.message} message={errors.message} />
            </InputFieldWrapper>
            <ButtonContainer>
              <FormButton type="submit" disabled={isSubmitting}>
                Submit
              </FormButton>
            </ButtonContainer>
          </Form>
        )}
      </Formik>
    </FormCard>
  );
}
