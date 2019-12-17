import React from 'react';
// Redux
import { useSelector } from 'react-redux';
// Formik
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
// MUI
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// Styling
import { makeStyles } from '@material-ui/core/styles';

// Define custom styling for the TenantForm
const useStyles = makeStyles(theme => ({
  formCard: {
    padding: theme.spacing(4)
  },
  textField: {
    width: '46%',
    margin: theme.spacing(2)
  }
}));

const validationSchema = Yup.object().shape({
  firstName: Yup.string().max(50, 'First Name entered was too long'),
  lastName: Yup.string().max(50, 'Last Name entered was too long'),
  phone: Yup.string().min(10, 'Must enter at least a 10 digit phone number'),
  email: Yup.string()
    .email('Invalid Email')
    .max(50, 'Email entered was too long'),
  residenceId: Yup.string().required('Must include a property!')
});

export default function TenantForm({ initialValues }) {
  // bring in custom styling
  const classes = useStyles();

  // bring in initialValues and set defaults
  const {
    firstName = '',
    lastName = '',
    phone = '',
    email = '',
    residenceId = ''
  } = initialValues;

  // grab list of properties from state
  const options = useSelector(state => state.propReducer.properties);

  return (
    <Paper className={classes.formCard}>
      <h2>Add a Tenant</h2>
      <Formik
        enableReinitialize
        validationSchema={validationSchema}
        initialValues={{
          firstName,
          lastName,
          phone,
          email,
          residenceId
        }}
        onSubmit={values => {
          console.log('Form submitted');
          // submit(values);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <Grid container justify="space-evenly">
              <Field
                className={classes.textField}
                size="small"
                margin="normal"
                variant="outlined"
                name="firstName"
                type="text"
                label="First Name"
                as={TextField}
                helperText={
                  errors.firstName
                    ? errors.firstName
                    : `Please enter first name of tenant`
                }
                error={!!errors.firstName}
              />
              <Field
                className={classes.textField}
                size="small"
                margin="normal"
                variant="outlined"
                name="lastName"
                type="text"
                label="Last Name"
                as={TextField}
                helperText={
                  errors.lastName
                    ? errors.lastName
                    : 'Please enter last name of tenant'
                }
                error={!!errors.lastName}
              />
              <Field
                className={classes.textField}
                size="small"
                margin="normal"
                variant="outlined"
                name="phone"
                type="phone"
                label="Phone"
                as={TextField}
                helperText={
                  errors.phone
                    ? errors.phone
                    : 'Please enter phone number of tenant'
                }
                error={!!errors.phone}
              />
              <Field
                className={classes.textField}
                size="small"
                margin="normal"
                variant="outlined"
                name="email"
                type="email"
                label="Email"
                as={TextField}
                helperText={
                  errors.email ? errors.email : 'Please enter email of tenant'
                }
                error={!!errors.email}
              />
              <Field
                className={classes.textField}
                as={TextField}
                select
                label="Property"
              >
                {options.map(option => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              </Field>
            </Grid>
          </Form>
        )}
      </Formik>
    </Paper>
  );
}
