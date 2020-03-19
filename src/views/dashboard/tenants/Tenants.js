import React, { useState } from 'react';
import { Divider, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import EditIcon from '@material-ui/icons/Edit';
import TenantCard from '../../../components/Tenants/TenantCard';
import ProfileSVG from '../../../assets/svg/ProfileSVG.svg';
import PropertyList from '../properties/Properties';
import AddTenantCard from '../../../components/Tenants/AddTenantCard';
import TenantDetailsModal from '../../../components/Tenants/TenantDetailsModal';

const Tenants = () => {
  // open/close state for modal
  const [openDetails, setOpenDetails] = useState(false);

  // store individual tenant from map in state
  const [currentTenant, setCurrentTenant] = useState({});
  // store associated property in state
  const [currentProperty, setCurrentProperty] = useState({});

  const loading = useSelector(state => state.propReducer.isGettingTenants);

  const errMsg = useSelector(state => state.propReducer.errMsg);

  const tenantList = useSelector(state => state.propReducer.tenants);
  const propertyList = useSelector(state => state.propReducer.properties);

  // handle open/close, takes in property & tenant
  const handleOpen = (property, tenant) => {
    // set currentTenant state to the property obj
    setCurrentTenant(tenant);
    setCurrentProperty(property);
    setOpenDetails(true);
  };

  const handleClose = () => {
    setCurrentTenant({});
    setCurrentProperty({});

    setOpenDetails(false);
  };

  return (
    <div className="tenants">
      <h1>List of Tenants</h1>
      <Divider />
      <br />

      <Grid container spacing={3}>
        {tenantList.map(tenant => {
          // map over tenantList from state and render TenantCards
          // pull out tenant info
          const { id, firstName, lastName, residenceId } = tenant;

          // filter the property list from state to show
          // tenant's property association
          const property = propertyList.filter(
            property => property.id === residenceId
          );

          return (
            <TenantCard
              handleOpen={handleOpen}
              tenant={tenant || {}}
              iconPath={`/dashboard/tenants/edit/${id}`}
              key={id}
              svg={<ProfileSVG />}
              icon={<EditIcon />}
              title={`${firstName} ${lastName}`}
              property={property[0]}
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
        <TenantDetailsModal
          property={currentProperty}
          tenant={currentTenant}
          open={openDetails}
          close={handleClose}
        />
      </Grid>
    </div>
  );
};

export default Tenants;
