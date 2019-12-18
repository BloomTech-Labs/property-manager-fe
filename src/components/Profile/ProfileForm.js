/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/** @jsx jsx */
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { jsx } from '@emotion/core';
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  makeStyles,
  CircularProgress
} from '@material-ui/core';
import FormErrors from '../../helpers/FormErrors';
import MuiModal from '../UI/MuiModal';

const useStyles = makeStyles(theme => ({
  formControl: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: '100%',
    maxWidth: '600px'
  }
}));

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(255, 'Name entered was too long')
    .required('Must enter a First Name'),
  lastName: Yup.string()
    .max(255, 'Name entered was too long')
    .required('Must enter a surname')
});

export default function ProfileForm({
  submit,
  loading,
  isSubmitting,
  open,
  opened,
  close
}) {
  const classes = useStyles();

  const initialValues = { firstName: '', lastName: '' };

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
    <MuiModal open={opened} close={close}>
      <div className="form-card">
        <h2>Update User Info</h2>
        <Formik
          enableReinitialize
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={values => {
            submit(values);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form data-testid="form-element">
              <div className="input-wrapper">
                <label htmlFor="first-name">First Name</label>
                <Field
                  placeholder="Update your first name"
                  name="firstName"
                  type="text"
                />
                <FormErrors
                  touched={touched.firstName}
                  message={errors.firstName}
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="last-name">Last Name</label>
                <Field
                  placeholder="Update your last name"
                  name="lastName"
                  type="text"
                />
                <FormErrors
                  touched={touched.lastName}
                  message={errors.lastName}
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
    </MuiModal>
  );
}
