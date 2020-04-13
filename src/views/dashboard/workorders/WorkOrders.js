import React from 'react';
import { useSelector } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import { Divider } from '@material-ui/core';
import WorkOrderTable from '../../../components/WorkOrders/WorkOrderTable';
import IconButton from '../../../components/UI/IconButton';

export default function WorkOrders() {
  const workOrderList = useSelector(state => state.workOrderReducer.workOrders);

  return (
    <div className="work-orders">
      <h1>Work Orders</h1>
      <Divider />
      <IconButton
        url="/dashboard/workorders/add"
        icon={<AddIcon />}
        text="Add New"
      />
      <WorkOrderTable workOrderList={workOrderList} />
    </div>
  );
}
