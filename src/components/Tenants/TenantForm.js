import React from 'react';
import PropTypes from 'prop-types';
// Redux
// import { useSelector } from 'react-redux';
// Formik
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
// MUI
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
// Styling
import { makeStyles } from '@material-ui/core/styles';
import { MdSend } from 'react-icons/md';

// Define custom styling for the TenantForm
const useStyles = makeStyles(theme => ({
  formCard: {
    padding: theme.spacing(4)
  },
  formTitle: {
    marginBottom: theme.spacing(2)
  },
  textField: {
    width: '500px',
    maxWidth: '500px',
    margin: theme.spacing(2)
  },
  submitWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: theme.spacing(2)
  },
  submit: {}
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

export default function TenantForm({ initialValues, submit }) {
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
  // const options = useSelector(state => state.propReducer.properties);

  return (
    <Paper className={classes.formCard}>
      <h2 className={classes.formTitle}>Add a Tenant</h2>
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
        resetForm
        onSubmit={values => {
          // pull out id
          const { residenceId } = values;

          // format it to number to avoid
          // Formik/Yup's number quirks
          const formatValues = {
            ...values,
            residenceId: Number(residenceId)
          };

          return new Promise(resolve => {
            setTimeout(() => {
              submit(formatValues);
              resolve();
            }, 2000);
          });
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
                    : `Please enter tenant's first name`
                }
                error={errors.firstName && true}
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
                  errors.lastName ? errors.lastName : `Enter tenant's last name`
                }
                error={errors.lastName && true}
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
                  errors.phone ? errors.phone : `Enter tenant's phone`
                }
                error={errors.phone && true}
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
                  errors.email ? errors.email : `Enter tenant's email`
                }
                error={errors.email && true}
              />
              <Field
                className={classes.textField}
                size="small"
                margin="normal"
                variant="outlined"
                as={TextField}
                select
                name="residenceId"
                label="Property"
                helperText={
                  touched.residenceId && errors.residenceId
                    ? errors.residenceId
                    : `Select the tenant's property`
                }
                error={touched.residenceId && errors.residenceId && true}
                required
              >
                <MenuItem value="1">Property 1</MenuItem>
                <MenuItem value="2">Property 2</MenuItem>
                <MenuItem value="3">Property 3</MenuItem>
                <MenuItem value="4">Property 4</MenuItem>

                {/* {options.map(option => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))} */}
              </Field>
              <div className={classes.submitWrapper}>
                <Button
                  size="large"
                  color="primary"
                  variant="contained"
                  className={classes.submit}
                  disabled={isSubmitting}
                  type="submit"
                  endIcon={
                    isSubmitting ? (
                      <CircularProgress
                        style={{
                          height: '22px',
                          width: '22px',
                          marginRight: '4px'
                        }}
                      />
                    ) : (
                      <MdSend />
                    )
                  }
                >
                  Submit
                </Button>
              </div>
            </Grid>
          </Form>
        )}
      </Formik>
    </Paper>
  );
}

TenantForm.propTypes = {
  initialValues: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    residenceId: PropTypes.string.isRequired
  }).isRequired,
  submit: PropTypes.func.isRequired
};
