/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
// UI Components
import Container from '@material-ui/core/Container';
import { VertNav } from '../../components/Navigation/navigation';
import FloatingActions from '../../components/UI/FloatingActions';
import PropmanTheme from '../../theme/PropmanTheme';

function Dashboard(props) {
  return (
    <PropmanTheme>
      <div className="dashboard">
        <VertNav />
        <Container className="dashboard-content">{props.children}</Container>
        <FloatingActions />
      </div>
    </PropmanTheme>
  );
}

export default Dashboard;
