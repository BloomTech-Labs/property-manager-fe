/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/** @jsx jsx */
import { Formik } from 'formik';
import * as Yup from 'yup';
import { jsx } from '@emotion/core';
import MuiModal from '../UI/MuiModal';
import Loading from '../UI/Loading';
import ProfileFields from './ProfileFields';

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
          <ProfileFields />
        </Formik>
      </div>
    </MuiModal>
  );
}
