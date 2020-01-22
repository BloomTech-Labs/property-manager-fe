/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// UI Components
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';

// eslint-disable-next-line no-unused-vars
import { VertNav } from '../../components/Navigation/navigation';
import SideNav from '../../components/Navigation/SideNav/SideNav';
import FloatingActions from '../../components/UI/FloatingActions';
import PropmanTheme from '../../theme/PropmanTheme';
import { getProperties, getTenants, getUserInfo } from '../../store/actions';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(8, 4)
  }
}));

function TenantDashboard(props) {
  const classes = useStyles();

  // setup dispatch to dispatch get properties action
  const dispatch = useDispatch();
  // useEffect for initial get properties dispatch
  useEffect(() => {
    // set timeout to show place holder cards
    // dispatch the getProperties action
    dispatch(getProperties());

    dispatch(getTenants());
    dispatch(getUserInfo());
  }, [dispatch]);

  return (
    <PropmanTheme>
      <div className={classes.root}>
        {/* <VertNav /> */}
        <SideNav />
        <main className={classes.content}>
          <Container className="dashboard-content">{props.children}</Container>
        </main>
        <FloatingActions />
      </div>
    </PropmanTheme>
  );
}

export default TenantDashboard;
