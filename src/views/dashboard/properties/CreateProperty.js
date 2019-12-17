import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '@reach/router';
import PropertyForm from '../../../components/Properties/PropertyForm';
// Redux
import { createProperty } from '../../../store/actions';

const addProperty = createProperty(
  'https://pt6-propman-staging.herokuapp.com/api/properties'
);

export default function CreateProperty() {
  const dispatch = useDispatch();

  const submitFn = property => {
    navigate('/dashboard/properties');
    dispatch(addProperty(property));
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
