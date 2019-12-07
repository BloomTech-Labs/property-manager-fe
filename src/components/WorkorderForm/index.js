/** @jsx jsx */
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { jsx } from '@emotion/core';
import FormErrors from '../../helpers/FormErrors';
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
    <FormCard>
      <FormHeading>Maintenance Work Request Form</FormHeading>
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
        {({ errors, touched, isSubmitting }) => (
          <Form data-testid="form-element">
            <InputFieldWrapper>
              <Label htmlFor="name">Work order Type</Label>
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
              <Label htmlFor="if other">if other</Label>
              <Field
                as={TextInput}
                type="text"
                name="otherorder"
                placeholder="other order type"
              />
              <FormErrors
                touched={touched.aworderType}
                message={errors.worderType}
              />
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
              <Field
                as={TextInput}
                type="text"
                name="otherlocation"
                placeholder="other location"
              />
            </InputFieldWrapper>
            <InputFieldWrapper>
              <Label>Is this the first occurrence?</Label>
              <Field name="occurrence" as="select">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Field>
            </InputFieldWrapper>
            <InputFieldWrapper>
              <Label>
                Maintenance Request Details :<br />
                Please provide us with as much information about the problem as
                you can.This will help us resolve this issue as quickly as
                possible.
              </Label>
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
            </InputFieldWrapper>
            <InputFieldWrapper>
              <Label>Preferred Repair Time</Label>
              <Field name="RepairTime" as="select">
                <option value="8am-12pm">8am-12pm</option>
                <option value="12pm-4pm">12pm-4pm</option>
              </Field>
            </InputFieldWrapper>
            <ButtonContainer>
              <FormButton type="submit" disabled={isSubmitting}>
                Submit
              </FormButton>
            </ButtonContainer>
          </Form>
        )}
      </Formik>
    </FormCard>
  );
};

export default WorkorderForm;
