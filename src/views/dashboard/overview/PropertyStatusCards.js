import React from 'react';

export default function PropertyStatusCards({
  propertyTotalArray,
  propertyList
}) {
  return (
    <div className="property-status-card-info">
      <div className="property-status-label">
        Occupied
        <div className="property-status-value">
          {propertyTotalArray[0] ? propertyTotalArray[0] : 0}
        </div>
      </div>
      <span> </span>
      <div className="property-status-label">
        Vacant
        <div className="property-status-value">
          {propertyTotalArray[1] ? propertyTotalArray[1] : 0}
        </div>
      </div>
      <span> </span>
      <div className="property-status-label">
        Total
        <div className="property-status-value">
          {propertyList.length > 0 ? propertyList.length : 0}
        </div>
      </div>
    </div>
  );
}
