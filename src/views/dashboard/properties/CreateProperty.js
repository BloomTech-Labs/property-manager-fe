import React from 'react';
import { useDispatch } from 'react-redux';
import AddPropertyForm from '../../../components/Properties/AddPropertyForm';
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

  return (
    <div className="properties">
      <AddPropertyForm submit={submitFn} />
    </div>
  );
}
