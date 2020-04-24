/* eslint-disable react/prop-types */
import React from 'react';
import { Paper } from '@material-ui/core';

function NoWorkOrder() {
  return (
    <>
      <Paper>
        <h4 className="noWorkOrders">
          You don&apos;t have any active Work Orders yet!
        </h4>
      </Paper>
    </>
  );
}

export default NoWorkOrder;
