import React from 'react';
import { Divider } from '@material-ui/core';
import TenantCard from '../../../components/Tenants/TenantCard';

const Tenants = () => {
  return (
    <div className="tenants">
      <h1>List of Tenants</h1>
      <Divider />
      <TenantCard />
    </div>
  );
};

export default Tenants;
