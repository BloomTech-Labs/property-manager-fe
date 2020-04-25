/* eslint-disable react/prop-types */
import React from 'react';
import { Table, TableContainer, Paper } from '@material-ui/core';
import WorkOrderTableHead from './WorkOrderTableHead';
import WorkOrderTableBody from './WorkOrderTableBody';
import NoWorkOrder from './NoWorkOrder';
import '../../scss/components/_workOrderTable.scss';

export default function WorkOrderTable({ workOrderList }) {
  // If there are any workOrders returned, we render this chart.
  if (workOrderList.length) {
    return (
      <TableContainer component={Paper}>
        <Table className="table" aria-label="simple table">
          <WorkOrderTableHead />
          <WorkOrderTableBody workOrderList={workOrderList} />
        </Table>
      </TableContainer>
    );
  }

  // Else display this component
  return <NoWorkOrder />;
}
