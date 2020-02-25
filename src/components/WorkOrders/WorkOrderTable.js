import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
              return (
                <TableRow key={id}>
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

WorkOrderTable.propTypes = {
  workOrderList: PropTypes.arrayOf(PropTypes.any).isRequired
};
