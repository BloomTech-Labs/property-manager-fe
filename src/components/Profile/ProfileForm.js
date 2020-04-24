/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/** @jsx jsx */
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { jsx } from '@emotion/core';
import FormErrors from '../../helpers/FormErrors';
import MuiModal from '../UI/MuiModal';
import Loading from '../UI/Loading';

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(255, 'Name entered was too long')
    .required('Must enter a First Name'),
  lastName: Yup.string()
    .max(255, 'Name entered was too long')
    .required('Must enter a surname'),
  phone: Yup.string().min(10, 'Must enter at least a 10 digit phone number')
});

export default function ProfileForm({
  submit,
  loading,
  isSubmitting,
  opened,
  close
}) {
  const initialValues = { firstName: '', lastName: '', phone: '' };

  if (loading || isSubmitting) {
    return <Loading />;
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
              <div className="input-wrapper">
                <label htmlFor="phone">Phone</label>
                <Field
                  placeholder="Update your phone number"
                  name="phone"
                  type="number"
                />
                <FormErrors touched={touched.phone} message={errors.phone} />
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
