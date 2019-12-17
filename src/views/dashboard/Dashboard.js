/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// UI Components
import Container from '@material-ui/core/Container';
import { VertNav } from '../../components/Navigation/navigation';
import FloatingActions from '../../components/UI/FloatingActions';
import PropmanTheme from '../../theme/PropmanTheme';
import { getProperties } from '../../store/actions';

function Dashboard(props) {
  // setup dispatch to dispatch get properties action
  const dispatch = useDispatch();
  // useEffect for initial get properties dispatch
  useEffect(() => {
    // set timeout to show place holder cards
    // dispatch the getProperties action
    dispatch(
      getProperties('https://pt6-propman-staging.herokuapp.com/api/properties')
    );
  }, [dispatch]);

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
