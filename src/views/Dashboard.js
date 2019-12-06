import React, { useCallback } from 'react';

// UI Components
import { useDispatch } from 'react-redux';
import { VertNav } from '../components/Navigation/VerticalNav';

// Add Property Form
import AddPropertyForm from '../components/AddPropertyForm/AddPropertyForm';

// Redux imports
import { createProperty } from '../store/actions';

const dispatchAddProperty = createProperty(
  'https://pt6-propman.herokuapp.com/api/properties'
);

const Dashboard = () => {
  const dispatch = useDispatch();

  const handleAddProperty = useCallback(
    ({ ...values }) => dispatch(dispatchAddProperty(values)),
    [dispatch]
  );

  return (
    <div className="dashboard">
      <VertNav />
      <h2>Dashboard</h2>
      <AddPropertyForm submit={handleAddProperty} />
    </div>
  );
};

export default Dashboard;
