/* eslint-disable react/no-unused-prop-types */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import { navigate } from '@reach/router';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// Redux
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
import { MdSend } from 'react-icons/md';
import { formStyles } from '../../helpers/utils';
import { addTenant } from '../../store/actions/index';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().max(50, 'First Name entered was too long'),
  lastName: Yup.string().max(50, 'Last Name entered was too long'),
  phone: Yup.string().min(11, 'Must enter at least a 10 digit phone number'),
  email: Yup.string()
    .email('Invalid Email')
    .max(50, 'Email entered was too long'),
  password: Yup.string(),
  unit_id: Yup.number().required('Must include a property!'),
  lease_start: Yup.date(),
  lease_end: Yup.date()
});

export default function TenantForm({ initialValues, properties }) {
  // bring in custom styling
  const classes = formStyles();
  const dispatch = useDispatch();

  // bring in initialValues and set defaults
  const {
    firstName = '',
    lastName = '',
    phone = '',
    email = '',
    password = '',
    user_id = '',
    unit_id = '',
    lease_start = '',
    lease_end = ''
  } = initialValues;

  return (
    <Paper className={classes.formCard}>
      <h2 className={classes.formTitle}>
        {initialValues.firstName !== '' ? 'Edit Tenant' : 'Add Tenant'}
      </h2>
      <Formik
        enableReinitialize
        validationSchema={validationSchema}
        initialValues={{
          firstName,
          lastName,
          phone,
          email,
          password,
          user_id,
          unit_id,
          lease_start,
          lease_end
        }}
        resetForm
        onSubmit={values => {
          dispatch(addTenant(values)).then(() =>
            navigate('/dashboard/tenants')
          );
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
                name="password"
                type="password"
                label="Password"
                as={TextField}
                helperText={
                  errors.password
                    ? errors.password
                    : `Enter tenant's temporary password`
                }
                error={errors.password && true}
              />
              <Field
                className={classes.textField}
                size="small"
                margin="normal"
                variant="outlined"
                as={TextField}
                select
                name="unit_id"
                label="Property"
                helperText={
                  touched.unit_id && errors.unit_id
                    ? errors.unit_id
                    : `Select the tenant's property`
                }
                error={touched.unit_id && errors.unit_id && true}
                required
              >
                {properties.map(property => (
                  <MenuItem key={property.id} value={property.id}>
                    {property.name}
                  </MenuItem>
                ))}
              </Field>
              <Field
                className={classes.textField}
                size="small"
                margin="normal"
                variant="outlined"
                name="lease_start"
                type="date"
                as={TextField}
                helperText={
                  errors.lease_start
                    ? errors.lease_start
                    : `Enter lease start date`
                }
                error={errors.lease_start && true}
              />
              <Field
                className={classes.textField}
                size="small"
                margin="normal"
                variant="outlined"
                name="lease_end"
                type="date"
                as={TextField}
                helperText={
                  errors.lease_end ? errors.lease_end : `Enter lease end date`
                }
                error={errors.lease_end && true}
              />
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
    unit_id: PropTypes.number.isRequired,
    lease_start: PropTypes.number.isRequired,
    lease_end: PropTypes.number.isRequired
  }).isRequired,
  submit: PropTypes.func.isRequired,
  properties: PropTypes.arrayOf(PropTypes.object).isRequired
};
