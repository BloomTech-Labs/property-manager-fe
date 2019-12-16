import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Divider, Grid, Container } from '@material-ui/core';
import { getProperties } from '../../../store/actions';
import ProfileCard from './ProfileCard';
import PropTable from './PropTable';

export default function Profile() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const propertyList = useSelector(state => state.propReducer.properties);

  useEffect(() => {
    setTimeout(() => {
      dispatch(
        getProperties(
          'https://pt6-propman-staging.herokuapp.com/api/propertieshttps://pt6-propman-staging.herokuapp.com/api/properties'
        )
      ).then(() => {
        setLoading(false);
      });
    }, 2000);
  }, [dispatch]);

  return (
    <div className="profile">
      <h1>User Profile</h1>
      <Divider />
      <Container>
        <br />
        <Grid>
          <ProfileCard />
          <PropTable />
        </Grid>
      </Container>
    </div>
  );
}
