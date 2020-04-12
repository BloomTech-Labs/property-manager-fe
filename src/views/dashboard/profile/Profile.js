import React from 'react';
import { Divider, Grid, Container } from '@material-ui/core';
import ProfileCard from './ProfileCard';
import ProfileImage from '../../../assets/svg/shared-workspace.svg';
import './profile.scss';

export default function Profile() {
  return (
    <div className="profile">
      <h1>Profile</h1>
      <Divider />
      <Container>
        <br />
        <Grid container direction="row" spacing={10}>
          <Grid item sm={6}>
            <ProfileCard />
          </Grid>
          <Grid item md={6} align="right">
            <img
              className="profile-svg"
              src={ProfileImage}
              alt="Shared workspace"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
