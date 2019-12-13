/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
// UI Components
import { Container } from '@material-ui/core';
import { VertNav } from '../../components/Navigation/navigation';
import FloatingActions from '../../components/UI/FloatingActions';

function Dashboard(props) {
  return (
    <div className="dashboard">
      <VertNav />
      <Container className="dashboard-content">{props.children}</Container>
      <FloatingActions />
    </div>
  );
}

export default Dashboard;
