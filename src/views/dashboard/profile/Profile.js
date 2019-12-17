import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Divider, Grid, Container } from '@material-ui/core';
import { getProperties } from '../../../store/actions';
import ProfileCard from './ProfileCard';
import PropTable from './PropTable';
import ProfileImg from '../../../assets/svg/ProfileImg';

export default function Profile() {
  return (
    <div className="profile">
      <h1>User Profile</h1>
      <Divider />
      <Container>
        <br />
        <Grid container direction="row" spacing={5}>
          <Grid item sm={3}>
            <ProfileCard />
          </Grid>
          <Grid item md={6}>
            <ProfileImg />
          </Grid>
          <Grid item lg={12}>
            <PropTable />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
