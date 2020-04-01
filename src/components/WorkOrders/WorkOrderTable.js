import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@reach/router';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';
import '../../scss/components/_workOrderTable.scss';

// This allows us to have some infile styling at our finger tips.
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

  // This allows us to access our infile style objects using classes.{whatever}
  const classes = useStyles();
  // If there are any workOrders returned, we render this chart.
  // This goes all the way until TableContainer closes!!! Scroll wayy down!
  if (workOrderList.length) {
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Actions</TableCell>
              <TableCell>Work&nbsp;Order</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Start&nbsp;Date</TableCell>
              <TableCell align="right">Property</TableCell>
              <TableCell align="right">Created&nbsp;By</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Here we are getting all the tools we will 
            need to compare against to populate our chart */}
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

              // This function gets called later to format a given date
              const formatDate = date => date && new Date(date).toDateString();

              // Once all of our information is ready
              // we can start filling out the table!
              // All above code is just declaring variables FOR THIS TABLE
              return (
                <>
                  <TableRow className="table-row" key={id}>
                    <TableCell>
                      <Link to={`/dashboard/workorders/${id}`}>Update</Link>
                    </TableCell>
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

  // This is basically saying ELSE do this
  // This is a conditional render back from allll the way up top where it checks to see if there
  // are any items in workOrders
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
