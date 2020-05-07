import * as Yup from 'yup';

export const propertyValidation = Yup.object().shape({
  name: Yup.string()
    .max(30, 'Name entered must be 30 characters or less')
    .required('Must enter a name for the property'),
  rent: Yup.number().required('Must enter rent amount'),
  street_address: Yup.string()
    .max(255, 'Address entered was too long')
    .required('Must enter a street address'),
  city: Yup.string()
    .max(50, 'City entered was too long')
    .required('Must enter a city'),
  zip: Yup.string()
    .min(5, 'Must enter 5-digit zip code')
    .max(5, 'Must enter 5-digit zip code')
    .required('Must enter a 5-digit zip code'),
  state: Yup.string()
    .max(50, 'State entered was too long')
    .required('Must enter the state'),
  occupied: Yup.number().required('Property Status is required!')
});