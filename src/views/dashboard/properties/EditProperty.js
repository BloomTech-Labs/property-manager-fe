import React, { useEffect } from 'react';
import PropertyForm from '../../../components/Properties/PropertyForm';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { editProperty, getProperty } from '../../../store/actions';

export default function EditProperty(props) {
  // set the url for the api calls and pass in the
  // url param from props
  const url = `https://pt6-propman-staging.herokuapp.com/api/properties/${props.id}`;

  // pass the url into the edit action
  const updateProperty = editProperty(url);

  // setup dispatch to dispatch the action
  const dispatch = useDispatch();

  // when form is submitted dispatch edit action
  const submitFn = property => {
    dispatch(updateProperty(property));
  };

  // grab the property from redux state
  const property = useSelector(state => state.propReducer.property);

  // initialValues for the edit form
  const propertyFields = {
    name: property.name,
    street: property.street,
    city: property.city,
    state: property.state,
    zip: property.zip,
    status: property.status
  };

  // get the property by id when component mounts
  useEffect(() => {
    dispatch(getProperty(url));
  }, [dispatch, url]);

  return (
    <div className="properties">
      <PropertyForm initialValues={propertyFields} submit={submitFn} />
    </div>
  );
}
