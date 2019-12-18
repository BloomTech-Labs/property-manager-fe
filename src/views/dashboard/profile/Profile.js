import React from 'react';
import { Divider, Grid, Container } from '@material-ui/core';
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
        <Grid container direction="row" spacing={10}>
          <Grid item sm={6}>
            <ProfileCard />
          </Grid>
          <Grid item md={6} align="right">
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
