import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '@reach/router';
import PropertyForm from '../../../components/Properties/PropertyForm';
// Redux
import { createProperty, getProperties } from '../../../store/actions';

export default function CreateProperty() {
  const dispatch = useDispatch();

  const submitFn = property => {
    dispatch(createProperty(property)).then(() => {
      dispatch(getProperties());
      navigate('/dashboard/properties');
    });
  };

  const isSubmitting = useSelector(state => state.propReducer.isAddingProp);

  const defaultValues = {
    name: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    status: ''
  };

  return (
    <div className="properties">
      <PropertyForm
        isSubmitting={isSubmitting}
        initialValues={defaultValues}
        submit={submitFn}
      />
    </div>
  );
}
