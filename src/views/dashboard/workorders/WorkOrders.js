import React from 'react';
import { useSelector } from 'react-redux';
import WorkOrderTable from '../../../components/WorkOrders/WorkOrderTable';

export default function WorkOrders() {
  const workOrderList = useSelector(state => state.workOrderReducer.workOrders);

  return (
    <div className="work-orders">
      <h2>Work Orders</h2>
      <WorkOrderTable workOrderList={workOrderList} />
    </div>
  );
}
