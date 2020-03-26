import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';
import WorkOrderModal from './WorkOrderModal';
import '../../scss/components/_workOrderTable.scss';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  noWorkOrders: {
    textAlign: 'center',
    padding: '4rem'
  }
});

export default function WorkOrderTable({ workOrderList }) {
  const properties = useSelector(state => state.propReducer.properties);

  const tenants = useSelector(state => state.propReducer.tenants);

  const classes = useStyles();
  if (workOrderList.length) {
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Work&nbsp;Order</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Start&nbsp;Date</TableCell>
              <TableCell align="right">Property</TableCell>
              <TableCell align="right">Created&nbsp;By</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workOrderList.map(workOrder => {
              const {
                id,
                title,
                description,
                type,
                startDate,
                propertyId,
                createdBy
              } = workOrder;

              // Filter to select the property associated
              // with the work order
              const property = properties.filter(
                property => property.id === propertyId
              );

              // Filter to select whether tenant or landlord created work order
              const tenant = tenants.filter(tenant => tenant.id === createdBy);

              const formatDate = date => date && new Date(date).toDateString();

              const displayModal = workOrder => {
                const { id } = workOrder;
                const modal = document.getElementById(id);
                modal.style.display = 'flex';
              };

              return (
                <>
                  <WorkOrderModal item={workOrder} id={workOrder.id} />
                  <TableRow
                    className="table-row"
                    key={id}
                    onClick={() => displayModal(workOrder)}
                  >
                    <TableCell component="th" scope="row">
                      {title}
                    </TableCell>
                    <TableCell align="right">{description}</TableCell>
                    <TableCell align="right">{type}</TableCell>
                    <TableCell align="right">{formatDate(startDate)}</TableCell>
                    <TableCell align="right">{property[0].name}</TableCell>
                    <TableCell align="right">
                      {tenant.length ? tenant[0].type : 'landlord'}
                    </TableCell>
                  </TableRow>
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <h4 className={classes.noWorkOrders}>
                You don&apos;t have any active Work Orders yet!
              </h4>
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
}
