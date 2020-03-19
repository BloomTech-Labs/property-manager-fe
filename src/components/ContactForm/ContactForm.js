/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { MdEmail, MdMessage, MdPerson } from 'react-icons/md';
import {
  Button,
  Slide,
  Dialog,
  DialogTitle,
  Typography,
  DialogContent,
  DialogActions,
  Container
} from '@material-ui/core';
import FormErrors from '../../helpers/FormErrors';
import { I } from '../UI';
import MailSent from '../../assets/svg/mail-sent.svg';

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

// modal animation
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
        validationSchema={validationSchema}
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
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <Container>
          <DialogTitle disableTypography id="alert-dialog-slide-title">
            <h5 className="contactModalHeader">Form Submitted!</h5>
          </DialogTitle>
          <img className="contactFormImg" src={MailSent} alt="Thank you for message" />
          <DialogContent>
            <Typography align="center">Thank you for your feedback!</Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Container>
      </Dialog>
    </div>
  );
}
