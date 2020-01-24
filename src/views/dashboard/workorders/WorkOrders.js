import React from 'react';
import { useSelector } from 'react-redux';

export default function WorkOrders() {
  const workOrderList = useSelector(state => state.workOrderReducer.workOrders);

  console.log(workOrderList);

  return (
    <div>
      <div>This is the work order listing page</div>
    </div>
  );
}
