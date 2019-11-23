import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import {
  FormButton,
  ButtonContainer,
  InputFieldWrapper,
  FormHeading,
  FormCard,
  TextInput,
  Label
} from '../UI';

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
        <FormCard>
          <FormHeading>Maintenance Work Request Form</FormHeading>
          <Form onSubmit={handleSubmit}>
            <InputFieldWrapper>
              <Label>Work order Type</Label>
              <Field name="worderType" as="select">
                <option value="Plumbing">Plumbing</option>
                <option value="Electrical">Electrical</option>
                <option value="Pest Control">Pest Control</option>
                <option value="Appliances">Appliances</option>
                <option value="AC">AC</option>
                <option value="Heater">Heater</option>
                <option value="Other">Other</option>
              </Field>
              <br />
              <Label>if other</Label>
              <Field as={TextInput} type="text" name="otherorder" />
            </InputFieldWrapper>
            <InputFieldWrapper>
              <Label>Where is this issue located in the house?</Label>
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
              <Label>if other</Label>
              <Field as={TextInput} type="text" name="otherlocation" />
            </InputFieldWrapper>
            <InputFieldWrapper>
              <Label>Is this the first occurrence?</Label>
              <br />
              <Field type="radio" name="occurrence" value="Yes" checked /> Yes
              <br />
              <Field type="radio" name="occurrence" value="No" /> No
              <br />
            </InputFieldWrapper>
            <InputFieldWrapper>
              <Label>
                Maintenance Request Details :<br />
                Please provide us with as much information about the problem as
                you can.This will help us resolve this issue as quickly as
                possible.
              </Label>
              <Field name="message" as="textarea" rows="4" cols="50" />
            </InputFieldWrapper>
            <InputFieldWrapper>
              <Label>Preferred Repair Time</Label>
              <br />
              <Field type="radio" name="RepairTime" value="8am-12pm" /> 8am-12pm
              <br />
              <Field type="radio" name="RepairTime" value="12pm-4pm" /> 12pm-4pm
              <br />
            </InputFieldWrapper>
            <ButtonContainer>
              <FormButton type="submit">Submit</FormButton>
            </ButtonContainer>
          </Form>
        </FormCard>
      )}
    </Formik>
  );
};

export default WorkorderForm;
