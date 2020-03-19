/* eslint react/prop-types: 0 */
import React from 'react';
import { FaPlus, FaExclamationCircle } from 'react-icons/fa';
import PropertyCard from './PropertyCard';
import AddHouse from '../../assets/svg/add-house.svg';
import Error from '../../assets/svg/error.svg';

export default function AddPropertyCard(props) {
  const { propertyNum, isLoading, error } = props;

  const addPropertyPath = '/dashboard/properties/add';

  if (error && !isLoading) {
    return (
      <PropertyCard
        icon={<FaExclamationCircle style={{ color: '#EC5E7B' }} />}
        title="Uh oh! There was an error."
        svg={<Error />}
      />
    );
  }

  if (propertyNum === 0 && !isLoading) {
    return (
      <PropertyCard
        upperPath={addPropertyPath}
        iconPath={addPropertyPath}
        icon={<FaPlus />}
        title="No properties, add one?"
        svg={<AddHouse />}
      />
    );
  }
  if (propertyNum === 0 && isLoading) {
    return null;
  }
  return (
    <PropertyCard
      upperPath={addPropertyPath}
      iconPath={addPropertyPath}
      icon={<FaPlus />}
      title="Add a New Property?"
      svg={<AddHouse />}
    />
  );
}
