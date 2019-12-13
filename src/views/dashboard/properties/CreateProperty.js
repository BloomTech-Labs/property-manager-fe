import React from 'react';
import { navigate } from '@reach/router';
import { useDispatch } from 'react-redux';
import AddPropertyForm from '../../../components/Properties/AddPropertyForm';
// Redux
import { createProperty } from '../../../store/actions';

const addProperty = createProperty(
  'https://pt6-propman-staging.herokuapp.com/api/properties'
);

export default function CreateProperty() {
  const dispatch = useDispatch();

  // const submitFn = React.useCallback(
  //   ({ property }) => {
  //     dispatch(addProperty(property))
  //       .then(() => NavigationPreloadManager('/properties'))
  //       .catch(err => console.error(err));
  //   },
  //   [dispatch]
  // );

  const submitFn = property => {
    dispatch(addProperty(property));
  };

  return (
    <div className="properties">
      <AddPropertyForm submit={submitFn} />
    </div>
  );
}
