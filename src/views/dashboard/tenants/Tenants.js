import React from 'react';
import { Divider, Grid } from '@material-ui/core';
import TenantCard from '../../../components/Tenants/TenantCard';

const Tenants = () => {
  return (
    <div className="tenants">
      <h1>List of Tenants</h1>
      <Divider />
      <br />

      <Grid container spacing={3}>
        <TenantCard />
        <TenantCard />
        <TenantCard />
        <TenantCard />
      </Grid>
    </div>
  );
};

export default Tenants;
