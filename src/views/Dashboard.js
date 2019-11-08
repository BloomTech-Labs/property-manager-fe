import React from 'react';
import LoginForm from '../components/LoginForm';
import { VertNav } from '../components/navigation';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <VertNav />
      <div>This is the Dashboard</div>
      <LoginForm />
    </div>
  );
};

export default Dashboard;
