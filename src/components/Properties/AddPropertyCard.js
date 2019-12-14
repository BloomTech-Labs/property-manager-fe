/* eslint react/prop-types: 0 */
import React from 'react';
import { FaPlus } from 'react-icons/fa';
import PropertyCard from './PropertyCard';
import AddHouse from '../SVG/AddHouse';

export default function AddPropertyCard(props) {
  const { propertyNum, isGettingProperties } = props;

  if (propertyNum === 0 && !isGettingProperties) {
    return (
      <PropertyCard
        icon={<FaPlus />}
        title="No properties, add one?"
        svg={<AddHouse />}
      />
    );
  }
  if (propertyNum === 0 && isGettingProperties) {
    return null;
  }
  return (
    <PropertyCard
      icon={<FaPlus />}
      title="Add a New Property?"
      svg={<AddHouse />}
    />
  );
}
