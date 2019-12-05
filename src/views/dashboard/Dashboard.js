/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

// UI Components
// import { useDispatch } from 'react-redux';
import { VertNav } from '../../components/navigation';

// // Add Property Form
// import AddPropertyForm from '../../components/AddPropertyForm/AddPropertyForm';

// // Redux imports
// import { createProperty } from '../../store/actions';

// const dispatchAddProperty = createProperty(
//   'https://pt6-propman.herokuapp.com/api/properties'
// );

const Dashboard = props => {
  // const dispatch = useDispatch(props);

  // const handleAddProperty = useCallback(
  //   ({ ...values }) => dispatch(dispatchAddProperty(values)),
  //   [dispatch]
  // );

  return (
    <div className="dashboard">
      <VertNav />
      {props.children}
    </div>
  );
};

export default Dashboard;
