/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Slide } from '@material-ui/core';
import { MdEmail, MdMessage, MdPerson } from 'react-icons/md';
import FormErrors from '../../../helpers/FormErrors';
import { I } from '../../../components/UI';
import ContactFormMessage from './ContactFormMessage';
import { contactValidation } from './ContactValidation';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ContactForm() {
  // modal logic
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // form logic
  const encode = data => {
    return Object.keys(data)
      .map(
        // eslint-disable-next-line prefer-template
        key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  return (
    <div className="contact-form-card">
      <h2 className="desktop-form">Contact Us</h2>
      <Formik
        validationSchema={contactValidation}
        initialValues={{
          name: '',
          email: '',
          message: '',
          'bot-field': '',
          'form-name': 'contact'
        }}
        onSubmit={(values, { resetForm }) => {
          fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
              'form-name': 'contact',
              ...values
            })
          })
            .then(() => {
              resetForm();
              handleOpen();
            })
            // eslint-disable-next-line no-console
            .catch(err => console.error(err));
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form data-testid="form-element">
            <Field type="hidden" name="bot-field" />
            <Field type="hidden" name="contact" />
            <div className="input-wrapper">
              <label htmlFor="name">
                <I>
                  <MdPerson />
                </I>{' '}
                Name
              </label>
              <Field placeholder="Enter your name *" name="name" type="text" />
              <FormErrors touched={touched.name} message={errors.name} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="email">
                <I>
                  <MdEmail />
                </I>{' '}
                Email
              </label>
              <Field
                placeholder="Enter your email address *"
                name="email"
                type="email"
              />
              <FormErrors touched={touched.email} message={errors.email} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="message">
                <I>
                  <MdMessage />
                </I>{' '}
                Message
              </label>
              <Field
                as="textarea"
                rows="4"
                placeholder="Enter your message *"
                name="message"
                type="text"
              />
              <FormErrors touched={touched.message} message={errors.message} />
            </div>
            <div className="submit-btn-wrapper">
              <button
                data-testid="contactBtn"
                className="btn button"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <ContactFormMessage
        open={open}
        handleClose={handleClose}
        Transition={Transition}
      />
    </div>
  );
}
