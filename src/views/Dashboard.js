import React from 'react';
import { VertNav } from '../components/navigation';
import AddPropertyForm from '../components/AddPropertyForm/AddPropertyForm';

const Dashboard = () => {
  const handleLog = values => console.log(values);

  return (
    <div className="dashboard">
      <VertNav />
      <h2>Dashboard</h2>
      <AddPropertyForm submit={handleLog} />
    </div>
  );
};

export default Dashboard;
