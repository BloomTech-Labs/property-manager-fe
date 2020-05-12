/* eslint-disable import/prefer-default-export */
import * as Yup from 'yup';

export const contactValidation = Yup.object().shape({
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
