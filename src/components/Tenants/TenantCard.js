/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import { navigate } from '@reach/router';
import IconButton from '../UI/IconButton';
import { getTenants } from '../../store/actions';

// Component Styling
const useStyles = makeStyles({
  tenantCell: {
    minWidth: '20vw'
  },
  cell: {
    minWidth: '15vw'
  }
});

const TenantCard = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const tenants = useSelector(state => state.propReducer.tenants);

  useEffect(() => {
    dispatch(getTenants());
  }, [dispatch]);

  console.log('TENANTS', tenants);
  // const handleClick = () => {
  //   if (handleOpen) {
  //     // We call the handleOpen() func passed as prop
  //     // and give it the tenant & property that
  //     // was passed as props
  //     // This gives access to the obj data we can
  //     // use in the individual tenant modal
  //     return handleOpen(property, tenant);
  //   }

  //   return null;
  // };

  return (
    <>
      <IconButton text="Add" icon={<AddIcon />} url="/dashboard/tenants/add" />
      {tenants.length === 0 ? (
        <div className={classes.empty}>
          <h3>No tenants have been added, yet...</h3>
        </div>
      ) : (
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={classes.tenantCell}>Tenant</TableCell>
                <TableCell className={classes.cell}>Property</TableCell>
                <TableCell className={classes.cell}>Unit</TableCell>
                <TableCell className={classes.cell}>Move In Date</TableCell>
              </TableRow>
            </TableHead>
            {/* Here we separate the table, above are the headings, below are the actual data sects. */}
            <TableBody>
              {tenants.map((
                tenant // Create a row for each tenant
              ) => (
                <TableRow>
                  <TableCell>{tenant.firstName}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      )}
    </>
  );
};

export default TenantCard;
