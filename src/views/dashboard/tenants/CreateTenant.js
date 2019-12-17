import React from 'react';
import { Container } from '@material-ui/core';
import TenantForm from '../../../components/Tenants/TenantForm';

export default function CreateTenant() {
  const initialValues = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    residenceId: ''
  };

  return (
    <Container>
      <TenantForm initialValues={initialValues} />
    </Container>
  );
}
