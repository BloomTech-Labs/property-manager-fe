import React from 'react';
import { useSelector } from 'react-redux';
import WorkOrderTable from '../../../components/WorkOrders/WorkOrderTable';
import AddWorkOrder from '../../../components/WorkOrders/AddWorkOrder';

export default function WorkOrders() {
  const workOrderList = useSelector(state => state.workOrderReducer.workOrders);

  return (
    <div className="work-orders">
      <h2>Work Orders</h2>
      <AddWorkOrder />
      <WorkOrderTable workOrderList={workOrderList} />
    </div>
  );
}
