/* eslint-disable react/prop-types */
import React from 'react';
import { Table, TableContainer, Paper } from '@material-ui/core';

function NoWorkOrder() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table className="table" aria-label="simple table">
          <h4 className="noWorkOrders">
            You don&apos;t have any active Work Orders yet!
          </h4>
        </Table>
      </TableContainer>
    </>
  );
}

export default NoWorkOrder;
