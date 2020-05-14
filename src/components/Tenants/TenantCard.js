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
// eslint-disable-next-line
import { navigate } from '@reach/router';
import IconButton from '../UI/IconButton';
import { getTenants } from '../../store/actions';

// Component Styling
const useStyles = makeStyles({
  cell: {
    minWidth: '12vw'
  },
  row: {
    cursor: 'pointer',
    transition: 'all .2s ease',
    '&:hover': {
      background: '#f9a826',
      borderRadius: '50px',
      '& > *': {
        color: '#fff'
      }
    }
  }
});

const TenantCard = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const tenants = useSelector(state => state.propReducer.tenants);
  const formatDate = date => date && new Date(date).toDateString();

  useEffect(() => {
    dispatch(getTenants());
  }, [dispatch]);

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
                <TableCell className={classes.cell}>Tenant</TableCell>
                <TableCell className={classes.cell}>Property</TableCell>
                <TableCell className={classes.cell}>Phone</TableCell>
                <TableCell className={classes.cell}>Email</TableCell>
                <TableCell className={classes.cell}>Lease End</TableCell>
              </TableRow>
            </TableHead>
            {/* Here we separate the table, above are the headings, below are the actual data sects. */}
            <TableBody>
              {tenants.map((
                tenant // Create a row for each tenant
              ) => (
                <TableRow
                  className={classes.row}
                  key={tenant.id}
                  onClick={() => navigate(`/dashboard/tenants/${tenant.id}`)}
                >
                  <TableCell>{tenant.displayName}</TableCell>
                  <TableCell>{tenant.unit_name}</TableCell>
                  <TableCell>{tenant.phoneNumber}</TableCell>
                  <TableCell>{tenant.email}</TableCell>
                  <TableCell>{formatDate(tenant.lease_end)}</TableCell>
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
