/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/** @jsx jsx */
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { jsx } from '@emotion/core';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import FormErrors from '../../helpers/FormErrors';

const useStyles = makeStyles(theme => ({
  formControl: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: '100%',
    maxWidth: '600px'
  }
}));

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .max(30, 'Name entered must be 30 characters or less')
    .required('Must enter a name for the property'),
  rent: Yup.number()
    .positive()
    .required('Must enter rent amount'),
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
  occupied: Yup.number()
    .positive()
    .required('Property Status is required!')
});

export default function PropertyForm({
  submit,
  initialValues,
  loading,
  isSubmitting
}) {
  const classes = useStyles();

  if (loading || isSubmitting) {
    return (
      <div
        className="form-card"
        style={{ height: '500px', position: 'relative' }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <CircularProgress
            style={{
              height: '100px',
              width: '100px'
            }}
            color="secondary"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="form-card">
      <h2>{initialValues.name !== '' ? 'Edit Property' : 'Add Property'}</h2>
      <Formik
        enableReinitialize
        validationSchema={validationSchema}
        initialValues={{
          rent: initialValues.rent,
          street_address: initialValues.street_address,
          city: initialValues.city,
          state: initialValues.state,
          zip: initialValues.zip,
          occupied: initialValues.occupied
        }}
        onSubmit={values => {
          submit(values);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form data-testid="form-element">
            <div className="input-wrapper">
              <label htmlFor="name">Name</label>
              <Field
                placeholder="Enter the name for your Property"
                name="name"
                type="text"
              />
              <FormErrors touched={touched.name} message={errors.name} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="rent">Rent</label>
              <Field
                placeholder="Enter the rent for your Property"
                name="rent"
                type="number"
              />
              <FormErrors touched={touched.rent} message={errors.rent} />
            </div>

            <div className="input-wrapper">
              <label htmlFor="street">Street Address</label>
              <Field
                placeholder="Street address"
                name="street_address"
                type="text"
              />
              <FormErrors
                touched={touched.street_address}
                message={errors.street_address}
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="city">City</label>
              <Field placeholder="City" name="city" type="text" />
              <FormErrors touched={touched.city} message={errors.city} />
            </div>

            <div className="input-wrapper">
              <label htmlFor="zip">Zip Code</label>
              <Field
                placeholder="Enter a 5-digit Zip Code"
                name="zip"
                type="number"
              />

              <FormErrors touched={touched.zip} message={errors.zip} />
            </div>

            <div className="input-wrapper">
              <label htmlFor="state">State</label>
              <Field placeholder="State" name="state" type="text" />
              <FormErrors touched={touched.state} message={errors.state} />
            </div>

            <div className="input-wrapper">
              <label htmlFor="occupied">Number of Current Tenants</label>
              <Field
                placeholder="Number of Tenants"
                name="occupied"
                type="number"
              />
              <FormErrors
                touched={touched.occupied}
                message={errors.occupied}
              />
            </div>

            <div className="submit-btn-wrapper">
              <button
                className="btn btn-animated"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
