import React from 'react';
import WorkOrderChart from './WorkOrderChart';

export default function WorkOrderCard({ workOrderTotalArray }) {
  return (
    <>
      {workOrderTotalArray.length > 0 ? (
        <div className="work-order-card">
          <div className="work-order-chart">
            <h4 className="work-order-label">Work Orders By Type</h4>
            <WorkOrderChart workOrderTotalArray={workOrderTotalArray} />
          </div>
        </div>
      ) : (
        <h2>No Work Orders Submitted</h2>
      )}
    </>
  );
}
