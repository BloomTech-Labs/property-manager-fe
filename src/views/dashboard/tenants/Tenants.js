import React from 'react';
import { Divider } from '@material-ui/core';
import TenantCard from '../../../components/Tenants/TenantCard';
import Searchbar from '../../../components/Searchbar/Searchbar';

const Tenants = () => {
  return (
    <div className="tenants">
      <div className="dashboardHeader">
        <h1>List of Tenants</h1>
        <Searchbar />
      </div>
      <Divider />
      <TenantCard />
    </div>
  );
};

export default Tenants;
