import React from 'react';
// PropTypes
import PropTypes from 'prop-types';
// MUI
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ErrorIcon from '@material-ui/icons/Error';
// Components
import TenantCard from './TenantCard';
// SVGs
import Error from '../../assets/svg/error.svg';
import AddHouse from '../../assets/svg/add-house.svg';

const AddTenantCard = ({ isLoading, tenantNum, error }) => {
  const addTenantPath = '/dashboard/tenants/add';

  if (error && !isLoading) {
    return (
      <TenantCard
        title="Uh oh! There was an error."
        icon={<ErrorIcon style={{ color: '#EC5E7B' }} />}
        svg={<Error />}
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
      svg={<AddHouse />}
      title="Add a tenant?"
    />
  );
};

export default AddTenantCard;

AddTenantCard.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  tenantNum: PropTypes.number.isRequired,
  error: PropTypes.bool.isRequired
};
