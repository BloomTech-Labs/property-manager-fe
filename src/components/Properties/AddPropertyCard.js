/* eslint react/prop-types: 0 */
import React from 'react';
import { FaPlus, FaExclamationCircle } from 'react-icons/fa';
import PropertyCard from './PropertyCard';
import AddHouseSVG from '../SVG/AddHouseSVG';
import ErrorSVG from '../SVG/ErrorSVG';

export default function AddPropertyCard(props) {
  const { propertyNum, isLoading, error } = props;

  if (error && !isLoading) {
    return (
      <PropertyCard
        icon={<FaExclamationCircle />}
        title="Uh oh! There was an error."
        svg={<ErrorSVG />}
      />
    );
  }

  if (propertyNum === 0 && !isLoading) {
    return (
      <PropertyCard
        icon={<FaPlus />}
        title="No properties, add one?"
        svg={<AddHouseSVG />}
      />
    );
  }
  if (propertyNum === 0 && isLoading) {
    return null;
  }
  return (
    <PropertyCard
      icon={<FaPlus />}
      title="Add a New Property?"
      svg={<AddHouseSVG />}
    />
  );
}
