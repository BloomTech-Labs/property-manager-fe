import React from 'react';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ErrorIcon from '@material-ui/icons/Error';
import TenantCard from './TenantCard';
import ProfileSVG from '../SVG/ProfileSVG';
import ErrorSVG from '../SVG/ErrorSVG';

const AddTenantCard = ({ isLoading, tenantNum, error }) => {
  const addTenantPath = '/dashboard/tenants/add';

  if (error && !isLoading) {
    return (
      <TenantCard
        title="Uh oh! There was an error."
        icon={<ErrorIcon style={{ color: '#EC5E7B' }} />}
        svg={<ErrorSVG />}
      />
    );
  }

  if (tenantNum === 0 && isLoading) {
    return null;
  }

  return (
    <TenantCard
      upperPath={addTenantPath}
      iconPath={addTenantPath}
      icon={<PersonAddIcon />}
      svg={<ProfileSVG />}
      title="Add a tenant?"
    />
  );
};

export default AddTenantCard;
