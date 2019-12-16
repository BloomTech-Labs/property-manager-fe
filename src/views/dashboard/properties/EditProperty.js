import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';
import PropertyForm from '../../../components/Properties/PropertyForm';
// Redux
import { editProperty, getProperty } from '../../../store/actions';

export default function EditProperty({ id }) {
  // set the url for the api calls and pass in the
  // url param from props
  const url = `https://pt6-propman-staging.herokuapp.com/api/properties/${id}`;

  // pass the url into the edit action
  const updateProperty = editProperty(url);

  // setup dispatch to dispatch the action
  const dispatch = useDispatch();

  // when form is submitted dispatch edit action
  const submitFn = property => {
    dispatch(updateProperty(property)).then(() =>
      navigate('/dashboard/properties')
    );
  };

  // grab the property from redux state
  const property = useSelector(state => state.propReducer.property);

  // grab isGettingProperty bool from state
  const isGettingProperty = useSelector(
    state => state.propReducer.isGettingProperty
  );
  // grab isUpdatingProperty bool from state
  const isSubmitting = useSelector(
    state => state.propReducer.isUpdatingProperty
  );

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
      <PropertyForm
        loading={isGettingProperty}
        isSubmitting={isSubmitting}
        initialValues={propertyFields}
        submit={submitFn}
      />
    </div>
  );
}

EditProperty.defaultProps = {
  id: undefined
};

EditProperty.propTypes = {
  id: PropTypes.string
};
