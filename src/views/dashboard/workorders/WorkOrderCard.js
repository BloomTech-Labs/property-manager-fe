/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import Divider from '@material-ui/core/Divider';

function WorkOrderCard({ workOrders }) {
  const properties = useSelector(state => state.propReducer.properties);

  const property = properties.filter(
    property => property.id === workOrders.unit_id
  );

  return (
    <>
      <div className="wo-card-wrapper">
        <div className="wo-card">
          <div className="card-heading">
            <h5>Workorder Unit:</h5>
          </div>
          <div className="card-content">
            <h3>{property[0].name}</h3>
          </div>
        </div>
        <Divider orientation="vertical" />
        <div className="wo-card">
          <div className="card-heading">
            <h5>Description of Issue:</h5>
          </div>
          <div className="card-content">
            <h3>{workOrders.description}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkOrderCard;
