import React from 'react';
import { Container } from '@material-ui/core';
import TenantForm from '../../../components/Tenants/TenantForm';

export default function CreateTenant() {
  // define initialValues passed into the form
  const initialValues = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    residenceId: ''
  };

  const handleSubmit = tenant => {
    // eslint-disable-next-line no-console
    console.log(tenant);
  };

  return (
    <Container>
      <TenantForm submit={handleSubmit} initialValues={initialValues} />
    </Container>
  );
}
