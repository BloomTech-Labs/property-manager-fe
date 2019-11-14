import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import { VertNav } from '../components/navigation';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <VertNav />
      <h2>Dashboard</h2>
      <LoginForm />
    </div>
  );
};

export default Dashboard;
