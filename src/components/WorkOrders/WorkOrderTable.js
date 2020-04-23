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
import CreateIcon from '@material-ui/icons/Create';
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
          <TableBody>
            {/* Here we are getting all the tools we will 
            need to compare against to populate our chart */}
            {workOrderList.map(workOrder => {
              const {
                id,
                name,
                description,
                type,
                start_date,
                unit_id,
                comment,
                status,
                end_date,
                in_house,
                user_id
              } = workOrder;

              // Filter to select the property associated
              // with the work order
              const property = properties.filter(
                property => property.id === unit_id
              );

              // Filter to select whether tenant or landlord created work order
              // const tenant = tenants.filter(tenant => tenant.id === user_id);

              // This function gets called later to format a given date
              const formatDate = date => date && new Date(date).toDateString();

              // Once all of our information is ready
              // we can start filling out the table!
              // All above code is just declaring variables FOR THIS TABLE
              return (
                <>
                  <TableRow className="table-row" key={id}>
                    <TableCell component="th" scope="row">
                      {name}
                    </TableCell>
                    <TableCell align="left">{description}</TableCell>
                    <TableCell align="left">{type}</TableCell>
                    <TableCell align="left">{formatDate(start_date)}</TableCell>
                    <TableCell align="left">{property[0].unit_id}</TableCell>
                    <TableCell align="left">{user_id}</TableCell>
                    <TableCell align="left">{status}</TableCell>
                    <TableCell align="right">
                      <Link to={`/dashboard/workorders/${id}`}>
                        <CreateIcon />
                      </Link>
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
