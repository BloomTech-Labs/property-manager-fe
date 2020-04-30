import * as Yup from 'yup';

export const profileValidation = Yup.object().shape({
  firstName: Yup.string()
    .max(255, 'Name entered was too long')
    .required('Must enter a First Name'),
  lastName: Yup.string()
    .max(255, 'Name entered was too long')
    .required('Must enter a surname'),
  phone: Yup.string().min(10, 'Must enter at least a 10 digit phone number')
});
