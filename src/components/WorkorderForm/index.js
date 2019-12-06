import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  worderType: Yup.string().required('work order type is required'),
  maintenanceDetail: Yup.string().required('work order type is required')
});

// eslint-disable-next-line react/prop-types
const WorkorderForm = ({ submit }) => {
  return (
    <Formik
      initialValues={{
        worderType: '',
        otherorder: '',
        location: '',
        otherlocation: '',
        occurrence: '',
        maintenanceDetail: '',
        preferredTime: ''
      }}
      validationSchema={validationSchema}
      onSubmit={values => submit(values)}
    >
      {({ handleSubmit }) => (
        <div className="form-card">
          <h2>Maintenance Work Request Form</h2>
          <Form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="wOrderType">Work order Type</label>
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
              <label htmlFor="otherOrder">if other</label>
              <Field type="text" name="otherOrder" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="location">
                Where is this issue located in the house?
              </label>
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
              <label htmlFor="otherLocation">if other</label>
              <Field type="text" name="otherLocation" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="occurrence">Is this the first occurrence?</label>
              <br />
              <Field type="radio" name="occurrence" value="Yes" checked /> Yes
              <br />
              <Field type="radio" name="occurrence" value="No" /> No
              <br />
            </div>
            <div className="input-wrapper">
              <label htmlFor="message">
                Maintenance Request Details :<br />
                Please provide us with as much information about the problem as
                you can.This will help us resolve this issue as quickly as
                possible.
              </label>
              <Field name="message" as="textarea" rows="4" cols="50" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="RepairTime">Preferred Repair Time</label>
              <br />
              <Field type="radio" name="RepairTime" value="8am-12pm" /> 8am-12pm
              <br />
              <Field type="radio" name="RepairTime" value="12pm-4pm" /> 12pm-4pm
              <br />
            </div>
            <div className="submit-btn-wrapper">
              <button className="submit-btn-wrapper" type="submit">
                Submit
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default WorkorderForm;
