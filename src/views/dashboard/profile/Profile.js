import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Divider, Grid, Container } from '@material-ui/core';
import { getProperties } from '../../../store/actions';
import ProfileCard from './ProfileCard';
import PropTable from './PropTable';

export default function Profile() {
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
