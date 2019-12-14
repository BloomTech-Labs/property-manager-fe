import React from 'react';
import { Skeleton } from '@material-ui/lab';
import {
  Divider,
  Grid,
  Paper,
  CardHeader,
  Typography
} from '@material-ui/core';
import PropertyList from '../../../components/Properties/PropertyList';

export default function Profile() {
  return (
    <div className="profile">
      <h1>User Profile</h1>
      <Divider />
      <br />
      <Grid container spacing={3}>
        <Grid key="userId" item xs={12} sm={6} md={4} lg={3}>
          <Paper elevation={5}>
            <CardHeader
              title={<Typography variant="body1">User's Name</Typography>}
            />
          </Paper>
        </Grid>
        <Grid key="properties" item xs={12} sm={6} md={4} lg={3}>
          <Paper elevation={5}>
            <PropertyList />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
