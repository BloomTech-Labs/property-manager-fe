/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/** @jsx jsx */
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { jsx } from '@emotion/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
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
    .max(255, 'Name entered was too long')
    .required('Must enter a Property Name'),

  street: Yup.string()
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
  status: Yup.string().required('Property Status is required!')
});

export default function AddPropertyForm({ submit }) {
  const classes = useStyles();

  return (
    <div className="form-card">
      <h2>Add Property</h2>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          name: '',
          street: '',
          city: '',
          state: '',
          zip: '',
          status: ''
        }}
        onSubmit={values => {
          // console.log(values);
          submit(values);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form data-testid="form-element">
            <div className="input-wrapper">
              <label htmlFor="name">Property Name</label>
              <Field
                placeholder="Enter a name for your Property"
                name="name"
                type="text"
              />
              <FormErrors touched={touched.name} message={errors.name} />
            </div>

            <div className="input-wrapper">
              <label htmlFor="street">Street Address</label>
              <Field placeholder="Street address" name="street" type="text" />
              <FormErrors touched={touched.street} message={errors.street} />
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

            <FormControl className={classes.formControl}>
              <InputLabel>Property Status</InputLabel>
              <Field name="status" as={Select}>
                <MenuItem value="vacant">Vacant</MenuItem>
                <MenuItem value="occupied">Occupied</MenuItem>
              </Field>
              <FormErrors touched={touched.status} message={errors.status} />
            </FormControl>

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
