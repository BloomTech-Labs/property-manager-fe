import React, { useState } from 'react';
import { Redirect } from '@reach/router';
import { useSelector } from 'react-redux';

const WorkOrderEditForm = props => {
  const workOrderList = useSelector(state => state.workOrderReducer.workOrders);

  const workOrder = workOrderList.find(item => {
    return `${item.id}` === props.workOrderId;
  });

  const { title, description } = workOrder;

  const [values, setValues] = useState({
    title,
    description
  });

  if (!(workOrderList && workOrderList.length > 0)) {
    return <Redirect to="/dashboard/workorders" noThrow />;
  }

  return (
    <div>
      <input placeholder={values.title} />
    </div>
  );
};

export default WorkOrderEditForm;
