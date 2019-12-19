import React from 'react';
import { Divider, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import EditIcon from '@material-ui/icons/Edit';
import TenantCard from '../../../components/Tenants/TenantCard';
import ProfileSVG from '../../../components/SVG/ProfileSVG';
import PropertyList from '../properties/Properties';
import AddTenantCard from '../../../components/Tenants/AddTenantCard';

const Tenants = () => {
  const loading = useSelector(state => state.propReducer.isGettingTenants);

  const errMsg = useSelector(state => state.propReducer.errMsg);

  const tenantList = useSelector(state => state.propReducer.tenants);

  return (
    <div className="tenants">
      <h1>List of Tenants</h1>
      <Divider />
      <br />

      <Grid container spacing={3}>
        {tenantList.map(tenant => {
          // map over tenantList from state and render TenantCards

          // pull out the ID and name
          const { id, name } = tenant;

          return (
            <TenantCard
              tenant={tenant || {}}
              iconPath={`/dashboard/tenants/edit/${id}`}
              key={id}
              svg={<ProfileSVG />}
              icon={<EditIcon />}
            />
          );
        })}

        {(() => {
          // IIFE for multi-condition rendering
          if (tenantList.length > 0) {
            // there are tenants - don't display placeholders
            return null;
          }
          if (PropertyList.length === 0 && loading === false) {
            // no tenants yet - don't display placeholders
            return null;
          }
          return (
            // loading is still true display placeholders
            <>
              <TenantCard />
              <TenantCard />
              <TenantCard />
              <TenantCard />
            </>
          );
        })()}
        <AddTenantCard
          tenantNum={tenantList.length}
          isLoading={loading}
          error={errMsg}
        />
      </Grid>
    </div>
  );
};

export default Tenants;
