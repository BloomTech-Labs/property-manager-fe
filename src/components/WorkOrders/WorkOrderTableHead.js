import React from 'react';
import { TableCell, TableHead, TableRow } from '@material-ui/core';

function WorkOrderTableHead() {
  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell align="left">Work&nbsp;Order</TableCell>
          <TableCell align="left">Description</TableCell>
          <TableCell align="left">Type</TableCell>
          <TableCell align="left">Start&nbsp;Date</TableCell>
          <TableCell align="left">Property</TableCell>
          <TableCell align="left">Created&nbsp;By</TableCell>
          <TableCell align="left">Status</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
    </>
  );
}

export default WorkOrderTableHead;
