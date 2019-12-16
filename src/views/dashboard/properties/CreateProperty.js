import React from 'react';
import { useDispatch } from 'react-redux';
import PropertyForm from '../../../components/Properties/PropertyForm';
// Redux
import { createProperty } from '../../../store/actions';

const addProperty = createProperty(
  'https://pt6-propman-staging.herokuapp.com/api/properties'
);

export default function CreateProperty() {
  const dispatch = useDispatch();

  const submitFn = property => {
    dispatch(addProperty(property));
  };

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
      <PropertyForm initialValues={defaultValues} submit={submitFn} />
    </div>
  );
}
