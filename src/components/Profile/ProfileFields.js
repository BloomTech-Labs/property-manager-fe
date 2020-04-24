import React from 'react';
import { Field, Form } from 'formik';
import FormErrors from '../../helpers/FormErrors';

function ProfileFields() {
  return (
    <>
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
            <FormErrors touched={touched.lastName} message={errors.lastName} />
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
    </>
  );
}

export default ProfileFields;
