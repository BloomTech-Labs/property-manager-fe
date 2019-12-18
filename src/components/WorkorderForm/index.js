/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import FormErrors from '../../helpers/FormErrors';

const validationSchema = Yup.object().shape({
  worderType: Yup.string().required('work order type is required'),
  maintenanceDetail: Yup.string().required('work order type is required')
});

// eslint-disable-next-line react/prop-types
const WorkorderForm = ({ submit }) => {
  return (
    <div className="form-card">
      <h2>Maintenance Work Request Form</h2>
      <Formik
        initialValues={{
          wOrderType: '',
          otherOrder: '',
          location: '',
          otherLocation: '',
          occurrence: '',
          maintenanceDetail: '',
          preferredTime: ''
        }}
        validationSchema={validationSchema}
        onSubmit={values => submit(values)}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form data-testid="form-element">
            <div className="input-wrapper">
              <label htmlFor="wOrderType">Work order Type : </label>{' '}
              <Field name="wOrderType" as="select">
                <option value="Plumbing">Plumbing</option>
                <option value="Electrical">Electrical</option>
                <option value="Pest Control">Pest Control</option>
                <option value="Appliances">Appliances</option>
                <option value="AC">AC</option>
                <option value="Heater">Heater</option>
                <option value="Other">Other</option>
              </Field>
              <br />
              <label htmlFor="otherOrder">if other</label>{' '}
              <Field
                type="text"
                name="otherOrder"
                placeholder="other order type"
              />
              <FormErrors
                touched={touched.wOrderType}
                message={errors.wOrderType}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="location">
                Where is this issue located in the house?
              </label>{' '}
              <Field name="location" as="select">
                <option value="Main Floor">Main Floor</option>
                <option value="Basement">Basement</option>
                <option value="Master Bedroom">Master Bedroom</option>
                <option value="Guest Bedroom">Guest Bedroom</option>
                <option value="Bathroom">Bathroom</option>
                <option value="Kitchens">Kitchens</option>
                <option value="Other">Other</option>
              </Field>
              <br />
              <label htmlFor="otherLocation">if other</label>{' '}
              <Field
                type="text"
                name="otherLocation"
                placeholder="other location"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="occurrence">
                Is this the first occurrence ?{' '}
              </label>
              <Field name="occurrence" as="select">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Field>
            </div>
            <div className="input-wrapper">
              <label htmlFor="message">
                Maintenance Request Details :<br />
                Please provide us with as much information about the problem as
                you can.
              </label>{' '}
              <Field
                name="message"
                as="textarea"
                rows="4"
                cols="50"
                placeholder="detail info"
              />
              <FormErrors
                touched={touched.maintenanceDetail}
                message={errors.maintenanceDetail}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="repairTime">Preferred Repair Time: </label>{' '}
              <Field name="repairTime" as="select">
                <option value="8am-12pm">8am-12pm</option>
                <option value="12pm-4pm">12pm-4pm</option>
              </Field>
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
};

export default WorkorderForm;
